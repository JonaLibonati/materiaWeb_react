import React, { useContext } from 'react';
import { useRef, useState, useEffect } from 'react';
import { submit } from './contact.form';
import { handleInPutValue } from '../../../helpers/handleInPutValue';
import './contactSection.styles.css';
import { PopUpContext } from '../../../contexts/PopUpContext';
import { Loading } from '../../global/loading/Loading';

export const ContactSection = () => {

    const { usePopUp } = useContext(PopUpContext);

    const [isLoading, setIsLoading] = useState(false)

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [eMail, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const contact = useRef({});

    useEffect(() => {
        contact.current =
        {
            fname: fname,
            lname: lname,
            eMail: eMail,
            subject: subject,
            message: message,
            setFname: setFname,
            setLname: setLname,
            setEmail: setEmail,
            setSubject: setSubject,
            setMessage: setMessage,
        }
    }, [fname, lname, eMail, subject, message]);

    return (
        <>
            <section className="contact" id="contact">
                <div className="contact__cont">
                    <form className="contact__form" onSubmit={(e) => { submit(e, { ...contact.current }, usePopUp, setIsLoading) }}>
                        <div className="contact__flexItem">
                            <input type="hidden" name="_subject" value="Nuevo Mensaje!!" />
                            <input className="contact__input" value={fname} onChange={(e) => handleInPutValue(e, setFname)} type="text" id="fname" name="firstname" placeholder="Tu nombre.." />
                            <input className="contact__input" value={lname} onChange={(e) => handleInPutValue(e, setLname)} type="text" id="lname" name="lastname" placeholder="Tu apellido.." />
                            <input className="contact__input" value={eMail} onChange={(e) => handleInPutValue(e, setEmail)} type="email" id="eMail" name="eMail" placeholder="Tu eMail.." />
                            <input className="contact__input" value={subject} onChange={(e) => handleInPutValue(e, setSubject)} type="text" id="subject" name="subject" placeholder="¿Cual es el asunto?" />
                        </div>
                        <div className="contact__flexItem contact__flexItem--second">
                            <textarea className="contact__textarea" value={message} onChange={(e) => handleInPutValue(e, setMessage)} id="message" name="message" placeholder="¿Cual es tu mensaje?"></textarea>
                            <div className="contact__submit">
                                <Loading isLoading={isLoading}>
                                    <input type="submit" value="Enviar" />
                                </Loading>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
