
export const submit = ( e, contact, usePopUp, setIsLoading ) => {

    const { fname, lname, eMail, phone, bookAmount, adrress, postalCode, message } = contact;

    e.preventDefault();

    if (fname == null || fname == undefined || fname.split(" ").join("") == "" ||
        lname == null || lname == undefined || lname.split(" ").join("") == "" ||
        eMail == null || eMail == undefined || eMail.split(" ").join("") == "" ||
        phone == null || phone == undefined || phone.split(" ").join("") == "" ||
        bookAmount == null || bookAmount == undefined || bookAmount.split(" ").join("") == "" ||
        adrress == null || adrress == undefined || adrress.split(" ").join("") == "" ||
        postalCode == null || postalCode == undefined || postalCode.split(" ").join("") == "" ){

        usePopUp("Verifique que todos los campos se hayan completado.", 'error');

    } else {
        sendContactMail({ ...contact }, usePopUp, setIsLoading);
    }
};

const sendContactMail = ( contact, usePopUp, setIsLoading )=>{

    const { fname, lname, eMail, subject, phone, bookAmount, adrress, postalCode, message, setFname, setLname, setEmail, setMessage, setPhone, setBookAmount, setAdrress, setPostalCode } = contact;

    setIsLoading(true);

    fetch("https://formsubmit.co/ajax/ba8e7ae84c4c31236033618535691782", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Asunto: `${subject}`,
            Nombre :  `${fname}`,
            Apellido :  `${lname}`,
            eMail:  `${eMail}`,
            Telefono:  `${phone}`,
            CantidadLibros:  `${bookAmount}`,
            Direccion:  `${adrress}`,
            CodigoPostal:  `${postalCode}`,
            Mensaje:  `${message}`,
        })
    })
        .then(response => {
            console.log(response);

            setFname('');
            setLname('');
            setEmail('');
            setMessage('');
            setPhone('');
            setBookAmount('');
            setAdrress('');
            setPostalCode('');

            usePopUp("El mensaje se ha enviado correctamente", "success")
            setIsLoading(false);
        })
        .catch(error => {
            console.log(error);
            usePopUp("No se pudo enviar el mensaje, reenvie nuevamente el mensaje.", "error");
            setIsLoading(false);
        });
}