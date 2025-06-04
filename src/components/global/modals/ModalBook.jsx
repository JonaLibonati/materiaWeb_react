import React from 'react'
import { ModalModel } from './ModalModel'

export const ModalBook = ({ setModal }) => {
  return (
    <ModalModel setModal={setModal} className={'modal__book'}>
        <div className='modal__h'>Abstract.</div>
        <div className="modal__p">
          Edgardo Barone, un joven arquitecto argentino, nos invita a recorrer a través de este libro, su notable carrera. Esta publicación registra su pensamiento y su notable participación en concursos durante los primeros diez años. Con diecisiete premiaciones, se ve reflejado su compromiso constante con la excelencia en la arquitectura.  En las casi cuatrocientas páginas de este libro, el lector encontrará un testimonio auténtico de su trayectoria y una mirada detallada de su apasionado proceso creativo. Esta obra, cuidadosamente documentada, nos ofrece una visión integral de Edgardo como arquitecto y como persona, revelando el modo en que logró materializar sus ideas y proyectos, a pesar de las dificultades.
        </div>
    </ModalModel>
  )
}
