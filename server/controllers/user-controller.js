const { User } = require('../models');
const { validationResult } = require('express-validator/check');
const bcryptjs = require('bcryptjs');
const { createToken } = require('../services/auth-servise');
function create (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array(), message: "Некоректные данные при регистрации."})
    }

    User.findOne({where: {email: req.body.email}}).then(user => {
        if (user) {
            return Promise.reject({statusCode: 422, message: "This email is already used"});
        } else {
            const {login, email, password, profile} = req.body;
            const salt = bcryptjs.genSaltSync(10);
            const passwordHash = bcryptjs.hashSync(password, salt);
            return User.create({login, email, password: passwordHash, profile});
        }
    })
    .then(user => {
        res.json(user);
    })
    .catch(error => {
        res.status(error.statusCode || 400).json({error: error.message});
    })
}

function login (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array(), message: "Некоректные данные при входе в систему."})
    }
    User.findOne({where: {email: req.body.email}}).then(async user => {
        if (!user) {
            return Promise.reject({statusCode: 422, message: "Такой пользователь не найден."});
        } else {
            const isMatch = await bcryptjs.compare(req.body.password, user.password);
            if (!isMatch) {
                return Promise.reject({statusCode: 422, message: "Пароль не верный."});
            }
            return user
        }
    })
    .then(createToken)
    .then(token => {
        res.json({ token });
    })
    .catch(error => {
        res.status(400).json({ error });
    })
}

module.exports = {create, login}