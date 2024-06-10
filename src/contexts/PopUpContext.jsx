
import { createContext, useState } from "react";
import { ErrorPopUp } from "../components/global/popups/ErrorPopUp";
import { SuccessPopUp } from "../components/global/popups/SuccessPopUp";

export const PopUpContext = createContext(null);

export const PopUpProvider = ({ children }) => {

  const [popUp, setPopUp] = useState(false);
  const [message, setMessage] = useState('Pop up message');
  const [type, setType] = useState(''); //error, success

  const usePopUp = (message, type) => {
    setPopUp(true);
    setMessage(message);
    setType(type);
  }

  return (
    <PopUpContext.Provider
      value={{
        usePopUp,
      }}
    >
      { popUp?
        type === 'error'?
          <ErrorPopUp message={message} setPopUp={setPopUp} /> : 
        type === 'success'?
          <SuccessPopUp message={message} setPopUp={setPopUp} /> : <></>
          :
          <></>}
      {children}
    </PopUpContext.Provider>
  );
};
