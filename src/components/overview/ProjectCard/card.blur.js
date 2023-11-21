
export function startElementBlur ({ pj__blur, pj__textBox, pj__chevronOpen }) {
	pj__blur.style.opacity = 0.8;
	pj__textBox.style.opacity = 0.8;
	pj__chevronOpen.style.height = "45px";
}

export function closeElementBlur ({ pj__blur, pj__textBox, pj__chevronOpen }) {
	pj__blur.style.opacity = null;
	pj__textBox.style.opacity = null;
	pj__chevronOpen.style.height = null;
}
