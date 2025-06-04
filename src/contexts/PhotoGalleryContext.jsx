
import { createContext, useContext, useState, useRef } from "react";
import { PhotoGallery } from "../components/PhotoGallery/PhotoGallery";
import { onClosePhoto, onTogglePhoto } from '../events/onEventsPhoto';
import loadingGif from '../assets/images/loading.gif';

export const PhotoGalleryContext = createContext(null);

export const PhotoGalleryProvider = ({ children }) => {

  const [galleryIsOpen, setGalleryIsOpen] = useState(false);

  const [gallery, setGallery] = useState(undefined);

  const [imgSrc, setImgSrc] = useState(loadingGif);

  const [percentage, setPercentage] = useState(0);

  const [pos, setPos] = useState(0);

  const imgCount = useRef(0);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const closePhoto = (photos) => {

      const { ph, ph__img, ph__percentage } = photos;

      //Close Full screen mode
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
      }
      // Removing events created in function openPhoto()
      document.body.removeEventListener("keydown", keyEventPhoto);

      //
      document.body.classList.remove('overFlowHidden');
      requestAnimationFrame(() => {
        ph.classList.remove("showOpa100");
      });
      requestAnimationFrame(() => {
        ph.classList.remove("bg-black");
      });
      ph.addEventListener("transitionend",
          function transListener() {
              setImgSrc(loadingGif);
              ph__img.classList.add("ph_loading");
              ph__percentage.classList.remove("displayNone");
              onTogglePhoto();
              onClosePhoto();
              imgCount.current = 0;
              setPos(0)
              setPercentage(0)
              setGallery(undefined);
              setGalleryIsOpen(false);
              ph.classList.remove("zIndex70");
              ph.removeEventListener("transitionend", transListener);
          }
      )
  }

  //Open Gallery

  const handleImageLoaded = (photos) => {
    imgCount.current = imgCount.current + 1;

    setPercentage(Math.round(imgCount.current * 100 / gallery.length))

    if (imgCount.current == gallery.length) {
        openPhoto(photos)
    }
  }

  const openPhoto = (photos) => {

      const { ph, ph__img, ph__percentage } = photos;

      if (!ph) return;

      //Set first image
      setImgSrc(gallery[0]);
      ph__img.classList.remove("ph_loading");
      ph__percentage.classList.add("displayNone");

      ph.addEventListener("transitionend",
        function transListener() {
            //Full screen mode
          if (ph.requestFullscreen) {
              ph.requestFullscreen();
          }
          else if (ph.webkitRequestFullscreen) { // Safari
              ph.webkitRequestFullscreen();
          } else if (el.mozRequestFullScreen) {
              ph.mozRequestFullScreen();
          } else if (el.msRequestFullscreen) {
              ph.msRequestFullscreen();
          }
          ph.removeEventListener("transitionend", transListener);
        }
    )
      
      //Adding events to create a touch gesture of "next photo" and "previous photo"
      //Adding events to listen a keydown to the gallery control"
      document.body.addEventListener("keydown", (event) => keyEventPhoto(event, photos));
  }

  //Next photo
  const nextPhoto = (photos) => {
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
  const previousPhoto = () => {
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
  function keyEventPhoto(event) {
      let key = event.code;
      switch (key) {
          case "ArrowLeft":
              previousPhoto();
              break;
          case "ArrowRight":
              nextPhoto();
              break;
          case "ArrowRight":
              nextPhoto();
              break;
          case "Escape":
              closePhoto();
              break;
      }
  }

  //Touchable slide photo
  const touchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  }

  const touchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  }

  const touchEnd = () => {

      let moveX = touchEndX.current - touchStartX.current;

      if (moveX > 20) {
          previousPhoto();
      }
      if (moveX < -20) {
          nextPhoto();
      }
  }


  return (
    <PhotoGalleryContext.Provider
      value={{
        setGalleryIsOpen,
        setGallery,
        closePhoto,
        handleImageLoaded,
        openPhoto,
        nextPhoto,
        previousPhoto,
        touchStart,
        touchMove,
        touchEnd,
        percentage,
        imgSrc,
      }}
    >
      {children}
      { galleryIsOpen ?  <PhotoGallery gallery={gallery} /> : <></>}
    </PhotoGalleryContext.Provider>
  );
};


export const usePhotoGallery = () => useContext(PhotoGalleryContext);