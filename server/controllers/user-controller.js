const { User } = require('../models');
const { validationResult } = require('express-validator/check');
const bcryptjs = require('bcryptjs');
const { createToken } = require('../services/auth-servise');
function create (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()})
    }

    User.findOne({where: {email: req.body.email}}).then(user => {
        if (user) {
            return Promise.reject({statusCode: 422, message: "This email is already used"});
        } else {
            const {login, email, password} = req.body;
            const salt = bcryptjs.genSaltSync(10);
            const passwordHash = bcryptjs.hashSync(password, salt);
            return User.create({login, email, password: passwordHash});
        }
    })
    .then(user => {
        res.json(user);
    })
    .catch(error => {
        res.status(error.statusCode || 4000).json({error: error.message});
    })
}

function login (req, res, next) {
    const loginUser = req.body;
    User.login(loginUser).then(createToken).then(token => {
        res.json({ token });
        next();
    }).catch(error => {
        res.status(401).json({ error });
    })
}

module.exports = {create, login}