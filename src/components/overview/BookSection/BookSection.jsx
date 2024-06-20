import React, { useState } from "react";
import "./bookSection.styles.css";
import { SvgIcon } from "../../SvgIcon/SvgIcon";
import { ModalBook } from "../../global/modals/ModalBook";
import { ModalOrderBook } from "../../global/modals/ModalOrderBook";

export const BookSection = () => {
  const [modalBook, setModalBook] = useState(false);
  const [modalOrderBook, setModalOrderBook] = useState(false);
  return (
    <>
      {modalBook ? <ModalBook setModal={setModalBook} /> : <></>}
      {modalOrderBook ? <ModalOrderBook setModal={setModalOrderBook} /> : <></>}
      <section className="book">
        <div className="book__container">
          <div className="book__img"></div>
        </div>
        <div className="book__ctas">
          <div className="book__cta" onClick={() => setModalBook(true)}>
            acerca del libro
            <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cta__chevron" viewBox="0 0 16 16" paths={[{fillRule:"evenodd", d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",}]} />
          </div>
          <div className="book__cta" onClick={() => setModalOrderBook(true)}>
            pedí el tuyo
            <SvgIcon xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="cta__chevron" viewBox="0 0 16 16" paths={[{fillRule:"evenodd", d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z",}]} />
          </div>
        </div>
      </section>
    </>
  );
};
