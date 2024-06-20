import React, { useContext, useEffect, useRef, useState } from "react";
import { ModalModel } from "./ModalModel";
import { PopUpContext } from "../../../contexts/PopUpContext";
import { handleInPutValue } from '../../../helpers/handleInPutValue';
import "./modalOrderBook.styles.css";
import { Loading } from "../loading/Loading";
import { submit } from "./orderBook.form";

export const ModalOrderBook = ({ setModal }) => {
  const { usePopUp } = useContext(PopUpContext);

  const [isLoading, setIsLoading] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [eMail, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bookAmount, setBookAmount] = useState("");
  const [adrress, setAdrress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");

  const order = useRef({});

  useEffect(() => {
    order.current = {
      fname: fname,
      lname: lname,
      eMail: eMail,
      phone: phone,
      bookAmount: bookAmount,
      adrress: adrress,
      postalCode: postalCode,
      subject: "Pedido de libro",
      message: message,
      setFname: setFname,
      setLname: setLname,
      setEmail: setEmail,
      setPhone: setPhone,
      setBookAmount: setBookAmount,
      setAdrress: setAdrress,
      setPostalCode: setPostalCode,
      setMessage: setMessage,
    };
  }, [fname, lname, eMail, phone, bookAmount, adrress, postalCode, message]);

  return (
    <ModalModel setModal={setModal} className={"modal__book order__modal"}>
      <section className="order" id="order">
        <h2 className="modal__h">Pedí el tuyo</h2>
        <p className="modal__p">Escribinos y te responderemos a la brevedad para coordinar.</p>
        <div className="order__cont">
          <form
            className="order__form"
            onSubmit={(e) => {
              submit(e, { ...order.current }, usePopUp, setIsLoading);
            }}
          >
            <div className="order__flexItem">
              <input type="hidden" name="_subject" value="Nuevo Mensaje!!" />
              <input
                className="order__input"
                value={fname}
                onChange={(e) => handleInPutValue(e, setFname)}
                type="text"
                id="fname"
                name="firstname"
                placeholder="Tu nombre."
              />
              <input
                className="order__input"
                value={lname}
                onChange={(e) => handleInPutValue(e, setLname)}
                type="text"
                id="lname"
                name="lastname"
                placeholder="Tu apellido."
              />
              <input
                className="order__input"
                value={eMail}
                onChange={(e) => handleInPutValue(e, setEmail)}
                type="email"
                id="eMail"
                name="eMail"
                placeholder="Tu eMail."
              />
              <input
                className="order__input"
                value={phone}
                onChange={(e) => handleInPutValue(e, setPhone)}
                type="tel"
                id="phone"
                name="phone"
                placeholder="Tu teléfono."
              />
              <input
                className="order__input"
                value={adrress}
                onChange={(e) => handleInPutValue(e, setAdrress)}
                type="tel"
                id="adrress"
                name="adrress"
                placeholder="Tu dirección."
              />
              <input
                className="order__input"
                value={postalCode}
                onChange={(e) => handleInPutValue(e, setPostalCode)}
                type="tel"
                id="postalCode"
                name="postalCode"
                placeholder="Tu código postal."
              />
              <input
                className="order__input"
                value={bookAmount}
                onChange={(e) => handleInPutValue(e, setBookAmount)}
                type="number"
                id="bookAmount"
                name="bookAmount"
                placeholder="¿Cuántos ejemplares?"
              />
            </div>
            <div className="order__flexItem order__flexItem--second">
              <textarea
                className="order__textarea"
                value={message}
                onChange={(e) => handleInPutValue(e, setMessage)}
                id="message"
                name="message"
                placeholder="¿Quieres agregar algún comentario?"
              ></textarea>
              <div className="order__submit">
                <Loading isLoading={isLoading}>
                  <input type="submit" value="Enviar" />
                </Loading>
              </div>
            </div>
          </form>
        </div>
      </section>
    </ModalModel>
  );
};
