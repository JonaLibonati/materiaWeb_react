import React, { useRef, useEffect, useState } from 'react';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { handleImageLoaded, closePhoto, addPhotoGalleryHelper, nextPhoto, previousPhoto, touchStart, touchMove, touchEnd } from '../../helpers/photoGallery';
import loadingGif from '../../assets/images/loading.gif';
import './PhotoGallery.styles.css'

export const PhotoGallery = ( { gallery } ) => {

    const [percentage, setPercentage] = useState(0);

    const [pos, setPos] = useState(0);

    const [imgSrc, setImgSrc] = useState(loadingGif);

    const imgCount = useRef(0);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const ph = useRef(null);
    const ph__close = useRef(null);
    const ph__next = useRef(null);
    const ph__previous = useRef(null);
    const ph__img = useRef(null);
    const ph__percentage = useRef(null);

    const photos = useRef({});

    useEffect(() => {
        photos.current =
            {
                ph: ph.current,
                ph__close: ph__close.current,
                ph__next: ph__next.current,
                ph__previous: ph__previous.current,
                ph__img: ph__img.current,
                ph__percentage: ph__percentage.current,
                gallery: gallery,
                setPos: setPos,
                setImgSrc: setImgSrc,
                setPercentage: setPercentage,
            }

        ph.current.addEventListener('load', addPhotoGalleryHelper( ph.current ))
    }, [])

    return (
        <>
            <div className="ph unselectable" ref={ph} >
                <div className="ph__close" ref={ph__close} onClick={() => closePhoto ( photos.current )} >
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ph__closeIcon" viewBox="0 0 16 16"
                    paths={[
                        { fileRule: "evenodd", d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" },
                        { fileRule: "evenodd", d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" }
                    ]}
                    />
                </div>
                <div className="ph__next" ref={ph__next} onClick={() => nextPhoto ( photos.current )} >
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ph__nextIcon" viewBox="0 0 16 16" paths={[{fillRule:"evenodd", d:"M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z",}]}/>
                </div>
                <div className="ph__previous" ref={ph__previous} onClick={() => previousPhoto ( photos.current )} >
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ph__previousIcon" viewBox="0 0 16 16" paths={[{fillRule:"evenodd", d:"M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z",}]} />
                </div>
                <figure className="ph__figure">
                    <img className="ph__img ph_loading unselectable" src={imgSrc} ref={ph__img} onTouchStart={(e) => touchStart ( e,touchStartX )} onTouchMove={(e) => touchMove (e, touchEndX)} onTouchEnd={() => touchEnd (touchStartX, touchEndX, photos.current)}/>
                    <p className="ph__percentage" ref={ph__percentage} >{percentage} %</p>
                </figure>
            </div>
            {/* Images preload in cache */}
            { gallery.map ( (image, index) => (<img className='displayNone unselectable' key={index} src={image} onLoad={() => handleImageLoaded( imgCount, photos.current )} />) ) }
        </>
    )
}
