import React from 'react'
import { PopUpModel } from './PopUpModel'

export const ErrorPopUp = ({ message, setPopUp }) => {
  return (
    <PopUpModel className={'popup__error'} message={message} setPopUp={setPopUp}/>
  )
}
