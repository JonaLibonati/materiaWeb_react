import { useEffect } from "react";

export const useOnScroll = (callback) => {
    useEffect(() => {

        window.addEventListener('scroll', callback);

        return () => {
            window.removeEventListener('scroll', callback);
        };
    }, []);
}
