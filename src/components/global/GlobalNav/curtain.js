"use strict";

export const curtain = ( nav ) => {

	const { nav__list, nav__item_home, nav__item_about, nav__item_projects, nav__item_contact, nav__curtain, nav__curtainBlur, nav__blur, status, setStatus } = nav;

	nav__list.classList.toggle("showOpa100");
	nav__curtain.classList.toggle("zIndex70");
	nav__curtainBlur.classList.toggle("showOpa100");
	nav__blur.classList.toggle("showOpa100");

	if (status == "open") {
		setStatus("close");
	} else if (status == "close") {
		setStatus("open");
	}
}
