//npm init -y: inicializar proyecto. Genera package.json -> configuracion proyecto
//npm install @sendgrid/mail : instala la libreria sendgrid y agg dependencias sendgrid al proyecto
//node app.js (nombre proyecto: para envío de correo)

const sgMail = require("@sendgrid/mail");

//ACA ES DONDE PONER LA API / codigo api
sgMail.setApiKey("Aqui_Va_Api_key"); // PONER API DE SENGRID/CLAVE

// EDICIÓN DEL CORREO
const msg = {
  to: "carol.arias@genstudents.org", // DESTINATARIO
  from: "violeta.pino@genstudents.org", // REMITENTE
  subject: "Municipalidad de Renca informa", // ASUNTO CORREO
  text: "Hola Diego: Te confirmamos que la solicitud con número 000001 ha sido aprobada para el 07 de agosto de 2024 a las 10:00 hrs.La cita se llevará a cabo en la siguiente dirección:Avenida Jose Manuel Balmaceda #402. Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Atentamente, Departamento De ..... ", //SOLO TEXTO SI NO LEE HTML
  html: "<h1>Hola Diego: Te confirmamos que la solicitud con número 000001 ha sido aprobada para el 07 de agosto de 2024 a las 10:00 hrs.La cita se llevará a cabo en la siguiente dirección:Avenida Jose Manuel Balmaceda #402. Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Atentamente, Departamento De .....</h1>,", // EN HTML
};

// ENVIANDO CORREO
sgMail
  .send(msg)
  .then(() => {
    console.log("El correo se envió con éxito");
  })
  .catch((error) => {
    console.error("Error al enviar el correo:", error.response.body.errors);
  });
