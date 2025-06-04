
export const addPhotoGalleryHelper = (ph) => {
    //open photo display
    ph.classList.add("zIndex70");
    requestAnimationFrame(() => {
        document.body.classList.add('overFlowHidden');
    });
    requestAnimationFrame(() => {
        ph.classList.add("showOpa100");
    });
    requestAnimationFrame(() => {
        ph.classList.add("bg-black");
    });
}

export const togglePhotoNavHelper = (navigator) => {

    const { nav, nav__curtain } = navigator;
    //open photo display
    nav.classList.toggle("displayNone");
    nav__curtain.classList.toggle("displayNone");
}
