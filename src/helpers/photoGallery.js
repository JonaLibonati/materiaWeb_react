"use strict";

import { onClosePhoto, onTogglePhoto } from '../events/onEventsPhoto';
import loadingGif from '../assets/images/loading.gif';

export const closePhoto = (photos) => {

    const { ph, ph__img, ph__percentage, setImgSrc } = photos;

    //Close Full screen mode
    /* if (document.exitFullscreen) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    }
    else if (document.webkitExitFullscreen) { // Safari
        if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        }
    } */
    // Removing events created in function openPhoto()
    document.body.removeEventListener("keydown", keyEventPhoto);

    //
    document.body.classList.remove('overFlowHidden');
    ph.classList.remove("showOpa100");
    ph.classList.remove("zIndex70");
    ph.addEventListener("transitionend",
        function transListener() {
            setImgSrc(loadingGif);
            ph__img.classList.add("ph_loading");
            ph__percentage.classList.remove("displayNone");
            onTogglePhoto();
            onClosePhoto();
            ph.removeEventListener("transitionend", transListener);
        }
    )
}

//Open Gallery

export const handleImageLoaded = (imgCount, photos) => {

    const { setPercentage, gallery } = photos;

    imgCount.current = imgCount.current + 1;

    setPercentage(Math.round(imgCount.current * 100 / gallery.length))

    if (imgCount.current == gallery.length) {
        openPhoto(photos)
    }
}

const openPhoto = (photos) => {

    const { ph, ph__img, ph__percentage, gallery, setImgSrc } = photos;

    if (!ph) return;

    //Set first image
    setImgSrc(gallery[0]);
    ph__img.classList.remove("ph_loading");
    ph__percentage.classList.add("displayNone");

    console.log("requestFullscreen0")
    //Full screen mode
    if (ph.requestFullscreen) {
        ph.requestFullscreen();
        console.log("requestFullscreen")
    }
    else if (ph.webkitRequestFullscreen) { // Safari
        ph.webkitRequestFullscreen();
        console.log("requestFullscreen2")
    } else if (el.mozRequestFullScreen) {
        ph.mozRequestFullScreen();
    } else if (el.msRequestFullscreen) {
        ph.msRequestFullscreen();
    }
    //Adding events to create a touch gesture of "next photo" and "previous photo"
    //Adding events to listen a keydown to the gallery control"
    document.body.addEventListener("keydown", (event) => keyEventPhoto(event, photos));
}

export const addPhotoGalleryHelper = (ph) => {
    //open photo display
    setTimeout(() => {
        document.body.classList.add('overFlowHidden');
        ph.classList.add("showOpa100");
        ph.classList.add("zIndex70");
    }, 10);
}

export const togglePhotoNavHelper = (navigator) => {

    const { nav, nav__curtain } = navigator;
    //open photo display
    nav.classList.toggle("displayNone");
    nav__curtain.classList.toggle("displayNone");
}

//Next photo
export const nextPhoto = (photos) => {

    const { setImgSrc, gallery, setPos } = photos;

    console.log(photos)

    setPos(pos => {
        if (pos < gallery.length - 1) {
            setImgSrc(gallery[pos + 1]);
            return (pos + 1);
        } else {
            setImgSrc(gallery[0]);
            return (0);
        }
    });
}

//Previus photo
export const previousPhoto = (photos) => {

    const { setImgSrc, gallery, setPos } = photos;

    setPos(pos => {
        if (pos > 0) {
            setImgSrc(gallery[pos - 1]);
            return (pos - 1);
        } else {
            setImgSrc(gallery[gallery.length - 1]);
            return (gallery.length - 1);
        }
    });
}

//Key control photo
function keyEventPhoto(event, photos) {
    let key = event.code;
    switch (key) {
        case "ArrowLeft":
            previousPhoto(photos);
            break;
        case "ArrowRight":
            nextPhoto(photos);
            break;
        case "ArrowRight":
            nextPhoto(photos);
            break;
        case "Escape":
            closePhoto(photos);
            break;
    }
}

//Touchable slide photo
export const touchStart = (event, touchStartX) => {
    touchStartX.current = event.touches[0].clientX;
}

export const touchMove = (event, touchEndX) => {
    touchEndX.current = event.touches[0].clientX;
}

export const touchEnd = (touchStartX, touchEndX, photos) => {

    let moveX = touchEndX.current - touchStartX.current;

    if (moveX > 20) {
        previousPhoto(photos);
    }
    if (moveX < -20) {
        nextPhoto(photos);
    }
}
