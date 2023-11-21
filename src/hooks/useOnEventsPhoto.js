import { useEffect } from "react";

export const useOnTogglePhoto = (callback) => {
    useEffect(() => {

        document.addEventListener('onTogglePhoto', callback);

        return () => {
            window.removeEventListener('onTogglePhoto', callback);
        };
    }, []);
}

export const useOnOpenPhoto = (callback) => {
    useEffect(() => {

        document.addEventListener('onOpenPhoto', callback);

        return () => {
            window.removeEventListener('onOpenPhoto', callback);
        };
    }, []);
}

export const useOnClosePhoto = (callback) => {
    useEffect(() => {

        document.addEventListener('onClosePhoto', callback);

        return () => {
            window.removeEventListener('onClosePhoto', callback);
        };
    }, []);
}