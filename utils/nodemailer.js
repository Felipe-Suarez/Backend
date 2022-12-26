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

//WHEN USER IS REGISTER
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

//WHEN USER PAY
const newPurchase = async (data) => {

    const user = data.username;
    const mail = data.email;
    const cartId = data.id;
    const products = data.products;
    const productosArr = products.map(product => {
        return (
            `<li>Producto: ${product.title} | Precio: $${product.price} | x${product.qty}</li>`
        )
    });

    const emailContent = {
        from: 'Mi primer Email',
        to: MAIL,
        subject: `Nuevo Pedido de ${user}`,
        text: "Hello coders",
        html: `
              <h2>Nombre: ${user}</h2>
              <h3>Email: ${mail}</h3>
              <h4>Numero de orden: ${cartId}</h4>
              <h5>Fecha: ${data.date}</h5>
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