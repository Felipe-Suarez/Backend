import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import bcrypt from "bcrypt";
import { User } from '../models/User.js'

import logger from '../../utils/logger.js'

//middleware
passport.use(
    new LocalStrategy({ usernameField: 'email' }, (username, password, done) => {
        User.findOne({ email: username }, (err, user) => {
            if (err) logger.error(err);
            if (!user) return done(null, false);
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) logger.error(err);
                if (isMatch) return done(null, user);
                return done(null, false);
            });
        });
    })
);

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    return done(null, user);
});

export default passport;