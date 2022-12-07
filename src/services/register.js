import { User } from '../models/User.js'

import bcrypt from 'bcrypt'

import { sendMail } from '../../utils/nodemailer.js'

import logger from '../../utils/logger.js'

import fs from 'fs'
import path from 'path'

const serviceRegister = async (req, res) => {
    const { username, password, email, direction, age, phone } = req.body;

    User.findOne({ email }, async (err, user) => {

        if (err) logger.error(err);
        if (user) {
            fs.unlink(path.join('..', '..', 'public', 'profilesImgs', req.file.filename), () => console.log('Eliminado'))
            // fs.unlink(`../../public/profileImgs/${req.file.filename}`)
            res.render("registerError")
        };

        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 8);
            const newUser = new User({
                username,
                password: hashedPassword,
                email,
                direction,
                age,
                phone,
                image: req.file.filename
            });
            sendMail(newUser)
            await newUser.save();
            res.redirect("/login");
        }

    });
}

export { serviceRegister }