import React from 'react';
import image from '../../../assets/images/competencia_presentacion_fecha.jpg'
import { SvgIcon } from '../../SvgIcon/SvgIcon';
import './bookLaunchSection.styles.css';

export const BookSection = () => {
  return (
    <>
        <section className='book' >
            <div className='book__container' >
                <img className='book__img' src={image} />
            </div>
            <div className="book__see">
							&nbsp;<a className="book__button" href="https://www.cpau.org/nota/37029" target="_blank">inscribete aqui</a>
							<SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="about__chevron" viewBox="0 0 16 16" paths={[{fillRule:"evenodd", d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",}]} />
						</div>
        </section>
    </>
  )
}
