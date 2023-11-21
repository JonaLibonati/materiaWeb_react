
export const onTogglePhoto = () => document.dispatchEvent(new CustomEvent('onTogglePhoto', {detail: { name: "cat", }}));

export const onOpenPhoto = ( images ) => document.dispatchEvent(new CustomEvent('onOpenPhoto', {detail: { images: images, }}));

export const onClosePhoto = () => document.dispatchEvent(new CustomEvent('onClosePhoto', {detail: { name: "cat", }}));
