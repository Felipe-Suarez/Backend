import { createTransport } from "nodemailer";

import { MAIL, PASS_MAIL } from '../config/index.js'

import logger from './logger.js'

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: MAIL,
        pass: PASS_MAIL,
    }
});

const sendMail = async (data) => {

    const emailContent = {
        from: 'Mi primer Email',
        to: MAIL,
        subject: "Nuevo Registro",
        text: "Hello coders",
        html: `<h1'>Nuevo Usuario Registrado</h1>
                <ul>
                    <li>Nombre: ${data.username}</li>
                    <li>Email: ${data.email}</li>
                    <li>Edad: ${data.age}</li>
                    <li>Telefono: ${data.phone}</li>
                    <li>Direccion: ${data.direction}</li>
                    <li>Imagen: ${data.image}</li>
                </ul>`,
    };

    try {
        await transporter.sendMail(emailContent);
    } catch (error) {
        logger.error('error de nodemailer', error);
    }

}

const newPurchase = async (data) => {

    const user = data.username;
    const mail = data.mail;
    const products = data.products;
    const productosArr = products.map(product => {
        return (
            `<li>Producto: ${product.title}, Precio: ${product.price}</li>`
        )
    });

    const emailContent = {
        from: 'Mi primer Email',
        to: MAIL,
        subject: `Nuevo Pedido de ${user}`,
        text: "Hello coders",
        html: `
              <h3>Nombre: ${user}</h3>
              <p>Email: ${mail}</p>
              <ul>Productos: ${productosArr.join(' ')}</ul>      
              `,
    };

    try {
        await transporter.sendMail(emailContent);
    } catch (error) {
        logger.error('error de nodemailer', error);
    }

}

export { sendMail, newPurchase };