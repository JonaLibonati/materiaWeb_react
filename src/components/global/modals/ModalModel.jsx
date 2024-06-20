import React from 'react';
import { XIcon } from '../icons/XIcon/XIcon'
import './modal.css'

export const ModalModel = ({ className, setModal, children }) => {
  return (
    <div className='modal__model'>
      <div className={`${className}`}>
        <button onClick={() => setModal(false)}>
          <XIcon className={'modal__close'} />
        </button>
        { children }
      </div>
    </div>
  )
}