
import { createContext } from "react";

let data = true;

export const FirstRender = createContext({
    firstRender: '',
    setFirstRender: () => {},
});
