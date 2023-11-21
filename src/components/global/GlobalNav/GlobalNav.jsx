import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { SvgIcon } from '../../SvgIcon/SvgIcon.jsx';
import { curtain } from './curtain.js';
import { screenOut } from './screen.js';
import { useOnLoad } from '../../../hooks/useOnLoad.js';
import { useOnTogglePhoto } from '../../../hooks/useOnEventsPhoto.js';
import { togglePhotoNavHelper } from '../../../helpers/photoGallery.js';
import './globalNav.styles.css';

export const GlobalNav = () => {

    const screen = useRef(null);

    const nav = useRef(null);
    const nav__list = useRef(null);
    const nav__curtain = useRef(null);
    const nav__curtainBlur = useRef(null);
    const nav__blur = useRef(null);

    const navigator = useRef({})

    const [status, setStatus] = useState('close');

    useEffect(() => {
        navigator.current = {
            nav: nav.current,
            nav__list : nav__list.current,
            nav__curtain : nav__curtain.current,
            nav__curtainBlur: nav__curtainBlur.current,
            nav__blur : nav__blur.current,
            status: status,
            setStatus: setStatus,
        }
    }, [])

    useEffect(() => {
        navigator.current.status = status
    }, [status]);

    useOnLoad ( () => screenOut ( screen.current ) )

    useOnTogglePhoto( () =>  togglePhotoNavHelper( navigator.current ) );

    return (
        <>
            {/* Screen */}
            <div className="screen screenBack" ref={screen}  ></div>
            {/* Navegation bar */}
            <nav className="nav unselectable" ref={nav} >
                {/* Nav Content */}
                <div className="nav__cont">
                    {/* Icons Nav */}
                    <ul className="nav__ic">
                        <li className="nav__icon">
                            <button className="nav__butList" onClick={ () => curtain( navigator.current ) }>
                                <div className="nav__hambur">
                                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="nav__hamburIcon" viewBox="0 0 16 16" paths={[{fillRule:"evenodd", d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z",}]} />
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
                {/* Nav Background Blur */}
                <div className="nav__blur" ref={nav__blur}></div>
            </nav>
            {/* Navegation bar Curtain*/}
            <nav className="nav nav__curtain unselectable" ref={nav__curtain}>
                {/* List Nav Mobile */}
                <ul className="nav__list" ref={nav__list} >
                    <li className="nav__item" onClick={ () => curtain( navigator.current ) } >
                        <p className="nav__h2"><a className="nav__link" href="/#home">home</a></p>
                    </li>
                    <li className="nav__item" onClick={ () => curtain( navigator.current ) } >
                        <p className="nav__h2"><a className="nav__link" href="/nosotros/">nosotro<span className="letter-spacing-0">s</span></a></p>
                    </li>
                    <li className="nav__item" onClick={ () => curtain( navigator.current ) } >
                        <p className="nav__h2"><a className="nav__link" href="/publicaciones/" >publicacione<span className="letter-spacing-0">s</span></a></p>
                    </li>
                    <li className="nav__item" onClick={ () => curtain( navigator.current ) } >
                        <p className="nav__h2"><a className="nav__link" href="/#pj">proyectos</a></p>
                    </li>
                    <li className="nav__item" onClick={ () => curtain( navigator.current ) } >
                        <p className="nav__h2"><a className="nav__link" href="/#contact">contact<span className="letter-spacing-0">o</span></a></p>
                    </li>
                </ul>
                {/* Nav Curtain blur */}
                <div className="nav__curtainBlur" ref={nav__curtainBlur}></div>
            </nav>
        </>
    )
}
