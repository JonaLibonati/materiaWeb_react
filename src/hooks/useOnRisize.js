import { useEffect } from "react";

export const useOnRisize = (callback) => {
    useEffect( () => {
        window.addEventListener('resize', callback);

        return () => window.removeEventListener('resize', callback);

    }, []);
}
