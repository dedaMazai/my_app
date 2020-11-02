const jwt = require('jsonwebtoken');
const config = require('../config/config');

function createToken(userFromDB) {
    const token = jwt.sign({id: userFromDB.id, role: userFromDB.role}, config.secret, {expiresIn:86400})
    return {token: token, id: userFromDB.id};
}

function verifyToken(req, res, next) {
    if (req.headers['authorization'] && req.headers['authorization'].length) {
        const token = req.headers['authorization'].replace(/(bearer|jnt)\s+/i,'');
        jwt.verify(token, config.secret, (err, decodedToken) => {
            if (err) {
                return next({ message: "Failed to authenticate token", statusCode: 401});
            }
            req.credentials = { id: decodedToken.Id, role: decodedToken.role };
            next();
        })
    }else{
        req.credentials = { role: 'guest' };
    }
}

module.exports = {
    createToken,
    verifyToken
}