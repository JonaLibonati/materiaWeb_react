import { useEffect } from "react";

export const useOnLoad = (callback) => {
    useEffect(() => {

        window.addEventListener('load', callback);

        return () => {
            window.removeEventListener('load', callback);
        };
    }, []);
}
