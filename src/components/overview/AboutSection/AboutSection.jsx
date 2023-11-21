import React, { useRef } from 'react';
import { SvgIcon } from '../../SvgIcon/SvgIcon.jsx';
import './AboutSection.styles.css';

export const AboutSection = () => {

	const about = useRef(null);

    return (
        <>
            <section className="about unselectable" id="about" ref={about} >
				<div className="about__cont">
					<div className="about__slogan">
						<p className="about__p">"somos </p><h2 className="about__h2">materia</h2><p className="about__p">, un&nbsp;estudio de&nbsp;</p><h3 className="about__h3">arquitectura</h3><p className="about__p"> que con&nbsp;</p><h3 className="about__h3">compromiso</h3><p className="about__p"> y&nbsp;</p><h3 className="about__h3">dedicación</h3><p className="about__p">, logra&nbsp;</p><h3 className="about__h3">soluciones</h3><p className="about__p">, que aportan&nbsp;</p><h3 className="about__h3">creatividad</h3><p className="about__p"> e&nbsp;</p><h3 className="about__h3">innovación</h3><p className="about__p"> en&nbsp;sus&nbsp;encomiendas"</p>
						<h3 className="about__h3--edi">arq. Edgardo Barone</h3>
						<div className="about__see">
							&nbsp;<a className="about__button" href="/nosotros" target="_blank">más sobre nosotros</a>
							<SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="about__chevron" viewBox="0 0 16 16" paths={[{fillRule:"evenodd", d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",}]} />
						</div>
					</div>
				</div>
			</section>
        </>
    )
}
