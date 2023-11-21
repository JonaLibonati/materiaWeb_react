import { useEffect } from "react";

export const useOnOpenProject = (callback) => {
    useEffect(() => {

        document.addEventListener('onOpenProject', callback);

        return () => {
            document.removeEventListener('onOpenProject', callback);
        };
    }, []);
}
