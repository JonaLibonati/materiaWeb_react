import React from 'react'
import { PopUpModel } from './PopUpModel'

export const SuccessPopUp = ({ message, setPopUp }) => {
  return (
    <PopUpModel className={"popup__success"} message={message} setPopUp={setPopUp}/>
  )
}