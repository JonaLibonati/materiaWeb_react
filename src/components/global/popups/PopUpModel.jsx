import React from 'react'
import { XIcon } from '../icons/XIcon/XIcon'
import "./popUps.css";

export const PopUpModel = ({ message, setPopUp, className }) => {
  return (
    <div className='popup__model'>
      <div className={`${className}`}>
        <p>{message}</p>
        <button onClick={() => setPopUp(false)}>
          <XIcon className={'popup__close'} />
        </button>
      </div>
    </div>
  )
}