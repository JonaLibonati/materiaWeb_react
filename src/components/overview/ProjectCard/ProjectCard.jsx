import React, { useRef, useState, useEffect, useContext } from 'react';
import { SvgIcon } from '../../SvgIcon/SvgIcon.jsx';
import { PhotoGallery } from '../../PhotoGallery/PhotoGallery.jsx';
import { hoverEnter, hoverLeave } from './card.hover.js';
import { open, close, scrolled } from './card.open.js';
import { shareProject } from '../../../helpers/shareProjects.js';
import { onOpenProject } from '../../../events/onOpenProject.js';
import { onTogglePhoto } from '../../../events/onEventsPhoto.js';
import { useOnScroll } from '../../../hooks/useOnScroll.js';
import { useOnOpenProject } from '../../../hooks/useOnOpenProject.js';
import { useOnClosePhoto } from '../../../hooks/useOnEventsPhoto.js';
import { useOnUrlString } from '../../../hooks/useOnUrlString.js';
import { FirstRender } from '../../../contexts/FirstRender';
import { usePhotoGallery } from '../../../contexts/PhotoGalleryContext';
import './card.styles.css';

export const ProjectCard = ( {title, subtitle, location, description, image, imagePosition, shared, gallery, urlString} ) => {

    const {firstRender, setFirstRender} = useContext(FirstRender);

    const { setGalleryIsOpen, setGallery} = usePhotoGallery();

    const pj__box = useRef(null);
    const pj__fig = useRef(null);
    const pj__blur = useRef(null);
    const pj__shareCircle = useRef(null);
    const pj__shareIcon = useRef(null);
    const pj__textBox = useRef(null);
    const pj__descrip = useRef(null);
    const pj__chevronClose = useRef(null);
    const pj__chevronOpen = useRef(null);
    const pj__buttonPhoto = useRef(null);

    const project = useRef({});

    const [isOpen, setIsOpen] = useState(false);

    const [position, setPosition] = useState("");

    useEffect(() => {
        project.current =
            {
                pj__box : pj__box.current,
                pj__fig : pj__fig.current,
                pj__blur : pj__blur.current,
                pj__shareCircle : pj__shareCircle.current,
                pj__shareIcon : pj__shareIcon.current,
                pj__textBox : pj__textBox.current,
                pj__descrip : pj__descrip.current,
                pj__chevronClose : pj__chevronClose.current,
                pj__chevronOpen : pj__chevronOpen.current,
                pj__buttonPhoto : pj__buttonPhoto.current,
                isOpen: isOpen,
                setIsOpen: setIsOpen,
                position: position,
                setPosition: setPosition,
            }
    }, []);

    useEffect(() => {
        project.current.isOpen = isOpen
    }, [isOpen]);

    useOnScroll ( () => scrolled( project.current ));

    useOnOpenProject ( () => close( project.current ) );

    useOnClosePhoto (() => setGalleryIsOpen(false) );

    useOnUrlString ( project, urlString, firstRender, setFirstRender );

  return (
    <>
        <article className="pj__box" ref={pj__box}>
            <figure
                className="pj__fig"
                ref={pj__fig}
                onMouseEnter={() => {hoverEnter({...project.current})}}
                onMouseLeave={() => {hoverLeave({...project.current})}}
            >

                <img className={"pj__img object-position-" + imagePosition} src={image} />
                <div className="pj__blur" ref={pj__blur}></div>
                <div className="pj__share" onClick={(e) => shareProject(e, shared)}>
                    <div className="pj__shareCircle" ref={pj__shareCircle} ></div>
                    <SvgIcon className="pj__shareIcon" ref={pj__shareIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" paths={[{d:"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"}]} />
                </div>
                <div className="pj__chevronOpen" ref={pj__chevronOpen}>
                    <p className="pj__textP pj__textP--chevron">conocer más</p>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="pj__chevronIcon pj__chevronIcon--open" viewBox="0 0 16 16" paths={[{fillRule:"evenodd", d:"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z",}]} />
                </div>
                <figcaption
                    className="pj__textBox"
                    ref={pj__textBox}
                    onClick={() => {
                        onOpenProject();
                        open( project.current );
                    }}
                >
                    <div>
                        <h3 className="pj__textH3">{title}</h3>
                        <h4 className="pj__textH4">{subtitle}</h4>
                    </div>
                </figcaption>
            </figure>
            <div className="pj__descrip padding0" ref={pj__descrip}>
                <div
                    className="pj__buttonPhoto pj__textP"
                    ref={pj__buttonPhoto}
                    onClick={ () => {
                        setGalleryIsOpen(true);
                        setGallery(gallery);
                        onTogglePhoto();
                    }}
                >
                    <p>ver galeria</p>
                </div>
                <h3 className="pj__textH3 pj__textH3--descrip">{title}</h3>
                <h4 className="pj__textH4 pj__textH4--descrip">{subtitle}</h4>
                <br />
                <h4 className="pj__textP t-light textJustifyLeft">{location}</h4>
                <br />
                <p className="pj__textP pj__textBox--descrip">{description}</p>
                <br />
                <div
                className="pj__chevronClose"
                ref={pj__chevronClose}
                onClick={() => {close( project.current )}}
                >
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="pj__chevronIcon" viewBox="0 0 16 16" paths={[{fillRule: "evenodd", d:"M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z",}, {fillRule: "evenodd", d:"M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z",}]} />
                </div>
            </div>
        </article>
    </>
  )
}
