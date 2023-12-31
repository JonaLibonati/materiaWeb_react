
export const submit = ( e, contact ) => {

    const { fname, lname, eMail, subject, message } = contact;

    e.preventDefault();

    if (fname == null || fname == undefined || fname.split(" ").join("") == "" ||
        lname == null || lname == undefined || lname.split(" ").join("") == "" ||
        eMail == null || eMail == undefined || eMail.split(" ").join("") == "" ||
        subject == null || subject == undefined || subject.split(" ").join("") == "" ||
        message == null || message == undefined || message.split(" ").join("") == "" ){

        alert("Verifique que todos los campos se hayan completado.");

    } else {
        sendContactMail({ ...contact });
    }
};

const sendContactMail = ( contact )=>{

    const { fname, lname, eMail, subject, message, setFname, setLname, setEmail, setSubject, setMessage } = contact;

    fetch("https://formsubmit.co/ajax/ba8e7ae84c4c31236033618535691782", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Nombre :  `${fname}`,
            Apellido :  `${lname}`,
            eMail:  `${eMail}`,
            Asunto: `${subject}`,
            Mensaje:  `${message}`,
        })
    })
        .then(response => {
            console.log(response);

            setFname('');
            setLname('');
            setEmail('');
            setSubject('');
            setMessage('');

            alert("El mensaje se ha enviado correctamente")
        })
        .catch(error => {
            console.log(error);
            alert("No se pudo enviar el mensaje, reenvie nuevamente el mensaje.")
        });
}