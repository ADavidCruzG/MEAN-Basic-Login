/**
 * Created by David Cruz on 09/06/2017.
 */
'use strict';

let express = require('express');
let router = express.Router();
let randomString = require('randomstring');
let userUtil = require('../util/user-util');

let userModel = require('../models/user-model');

/* CREATE user. */
router.post('/', (req, res, next) => {

    // Acá se encripta la contraseña antes de guardar
    let user = req.body;

    user.salt = randomString.generate(17);
    user.password = userUtil.encryptUserPassword(user.salt, user.password);

    userModel.create(req.body, (err, userCreated) => {
        if (err) {
            return next(err);
        }
        res.json(userCreated);
    });
});

/* GET user by email. */
router.get('/:email', (req, res, next) => {
    userModel.findOne({email: req.params.email}, (err, user) => {
        if (err) {
            return next(err);
        }
        res.json(user);
    });
});

/* GET user by email with decrypted password. */
router.get('/:email/login', (req, res, next) => {
    userModel.findOne({email: req.params.email}, (err, user) => {
        if (err) {
            return next(err);
        }

        // Acá se desencripta la contraseña antes de retornar el usuario
        user.password = userUtil.decryptUserPassword(user.salt, user.password);
        res.json(user);
    });
});

module.exports = router;