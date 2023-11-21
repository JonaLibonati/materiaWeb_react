
import {startElementBlur, closeElementBlur} from './card.blur'

export const hoverEnter = ({ pj__blur, pj__textBox, pj__chevronOpen, isOpen }) => {
    let pointer = window.matchMedia("(pointer: fine)");
    if ( pointer.matches && !isOpen ) {
        startElementBlur({ pj__blur, pj__textBox, pj__chevronOpen });
    }
}

export const hoverLeave = ({ pj__blur, pj__textBox, pj__chevronOpen }) => {
    let pointer = window.matchMedia("(pointer: fine)");
    if ( pointer.matches ) {
        closeElementBlur({ pj__blur, pj__textBox, pj__chevronOpen });
    }
}

