import React from 'react';
import { SvgIcon } from '../../SvgIcon/SvgIcon.jsx';
import './postSection.styles.css'

export const PostSection = () => {
    return (
        <>
            <section className="post" id='post'>
				<div className="post__cont">
					<div className="post__back">
						<div className="post__img post__img--1"></div>
						<div className="post__img post__img--2"></div>
						<div className="post__img post__img--3"></div>
						<div className="post__img post__img--4"></div>
						<div className="post__img post__img--5"></div>
						<div className="post__img post__img--6"></div>
					</div>
					<div className="post__blur"></div>
					<div className="post__text">
						<h3 className="post__h3">una voz emergente</h3>
						<p className="post__p">conoce nuestras apariciones en los medios de comunicación más importantes</p>
						<div className="post__see">
							&nbsp;<a className="post__button" href="/publicaciones" target="_blank">ver las publicaciones</a>
							<SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="post__chevron" viewBox="0 0 16 16" paths={[{fillRule:"evenodd", d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",}]} />
						</div>
					</div>
				</div>
			</section>
        </>
    )
}

