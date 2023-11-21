
import { startElementBlur, closeElementBlur } from './card.blur'

const paddingTotalHoriz = 20 + 10;

export function open( project ) {

	const { pj__descrip, pj__chevronOpen, pj__chevronClose, pj__shareCircle, pj__shareIcon, isOpen, setIsOpen } = project;

	//Check if pj__descrip is already open
	if ( !isOpen ) {
		//Hide the open chevron
		pj__chevronOpen.classList.add("displayNone");
		//Display share button
		pj__shareCircle.style.opacity = 0.8;
		pj__shareIcon.style.opacity = 1;
		//Remove padding0 and font-size0 class
		pj__descrip.classList.remove("padding0");
		//If there is only one column
		let mobile = window.matchMedia("(max-width: 949px) and (orientation: portrait)");
		if (mobile.matches) {
			//Determinate the element height
			let elementHeight = pj__descrip.scrollHeight;
			//Overwrite height values passing from 0 to element height
			pj__descrip.style.height = elementHeight + paddingTotalHoriz + "px";
			//When the transition end, overwrite values passing from element height to "auto"
			pj__descrip.addEventListener("transitionend",
				function transListener() {
					pj__descrip.style.height = "auto";
					pj__chevronClose.style.height = "40px";
					pj__descrip.removeEventListener("transitionend", transListener);
				}
			)
		}
		//If there are two or more columns
		else {
			//Overwrite height values passing from 0 to element height
			pj__descrip.style.height = "400px";
			//When the transition end
			pj__descrip.addEventListener("transitionend",
				function transListener() {
					pj__chevronClose.style.height = "40px";
					pj__descrip.removeEventListener("transitionend", transListener);
				}
			)
		}
		//Set attribute to open
		setIsOpen(true);
		//Non display blur
		closeElementBlur ( project );
	}
}

export function close( project ) {

	const { pj__descrip, pj__chevronOpen, pj__chevronClose, pj__shareCircle, pj__shareIcon, isOpen, setIsOpen } = project;

//Check if pj__descrip is already close
	if ( isOpen ) {
		//Set the chevronClose height to null
		pj__chevronClose.style.height = null;
		//Hide the share circle
		pj__shareCircle.style.opacity = null;
		pj__shareIcon.style.opacity = null;
		//Determinate the element height
		let elementHeight = pj__descrip.scrollHeight;
		//Suspend transition
		pj__descrip.style.transition = "none";
		//Overwrite height values passing from auto to element height
		pj__descrip.style.height = elementHeight + "px";

		requestAnimationFrame (
			function () {
				//Active transition
				pj__descrip.style.transition = "height 1s, padding-top 1s, padding-bottom 1s;";
				//Overwrite height values passing from element height to 0
				pj__descrip.style.height = 0 + "px";
				//Add padding0 class
				pj__descrip.classList.add("padding0");
			}
		)
		pj__descrip.style.transition = null;
		//Display the open chevron
		pj__chevronOpen.classList.remove("displayNone");
		//Set attribute to close
		setIsOpen(false);
		//
	}
}

//Positions Variables
//----Return top limit blur active area relative to the screen
let blurLimitTop = (screen.availHeight - screen.availHeight * 0.1) / 2 ;
//----Return bottom limit blur active area relative to the screen
let blurLimitBottom = screen.availHeight - (screen.availHeight - screen.availHeight * 0.29) / 2 ;
//----Return top limit to close
let limitTop = -400 * 0.25;
//----Return bottom limit to close
let limitBottom = screen.availHeight;

export const scrolled = ( project ) => {

	//Blur control on scroll
	let pointer = window.matchMedia("(pointer: fine)");
	if (pointer.matches == false) {
		checkPosition( project );
	}
	//Close pj-descrip on scroll
	let mobile = window.matchMedia("(max-width: 949px) and (orientation: portrait)");
	if (mobile.matches == false) {
		checkPositionClose( project );
	}
	//Close nav on scroll
	/* let relativeScroll = window.scrollY + positionNav;
	let status = nav__curtain.getAttribute("status");
	if ((relativeScroll < -180 || relativeScroll > 180) && status == "open") {
		curtain() //curtain.js;
		nav__curtain.setAttribute("status" , "close");
	} */
	//Set position atribute relative to screen to all elements.
	setPositionAtribute ( project );
	console.log(project.position)
}

//----Return y element center coordinate relative to the screen
function getElementPositionY ({ pj__box }) {
	let position_Y = pj__box.getBoundingClientRect().top + pj__box.scrollHeight / 2;
	return position_Y;
}

function checkPosition ( project ) {

	const { isOpen } = project;

	let position_Y = getElementPositionY ( project );
	//Check if pj__descrip is already open
	if ( !isOpen ) {
		//Start blur
		if (blurLimitTop < position_Y && position_Y < blurLimitBottom) {
			startElementBlur ( project );
		}
		//Non display blur
		else{
			closeElementBlur ( project );
		}
	}
	//If if pj__descrip is not oper, No display blur
	else{
		closeElementBlur ( project );
	}
}

function checkPositionClose ( project ) {

	const { isOpen } = project;

	let position_Y = getElementPositionY ( project );

	//Check if pj__descrip is open
	if ( isOpen ) {
		//Close
		if (limitTop > position_Y || position_Y > limitBottom) {
			close( project );
		};
	}
}

//Set position atribute relative to screen.
function setPositionAtribute ({ pj__box, position, setPosition }) {
	let position_Y = getElementPositionY ({ pj__box });
	//Check if pj__descrip is open
	if (limitTop < position_Y && position_Y < limitBottom && (position == "outScreen" || position == "onScreen")) {
		setPosition("onScreen");
	} else if (position == "outScreen" || position == "onScreen") {
		setPosition("outScreen");
	}
}

export const openWhenOnScreen = ( project, setFirstRender ) => {

	const { position } = project;

    console.log(position);
    if (position == "outScreen") {
		console.log("no")
        setTimeout(openWhenOnScreen, 100, project);
    } else {
		console.log("yes")
        setTimeout(open, 800, project);
		setTimeout(setFirstRender, 810, false);
        clearTimeout(openWhenOnScreen);
    }
}
