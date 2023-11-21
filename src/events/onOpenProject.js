
export const onOpenProject = () => document.dispatchEvent(new CustomEvent('onOpenProject', {detail: { name: "cat", }}));
