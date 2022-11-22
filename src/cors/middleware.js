let jwt = require('jsonwebtoken');
const reqResponse = require('./responseHandler');
const {UserType} = require("../constant/enum");

module.exports = {
    checkToken
}

function checkToken(req, res, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization'];

    if (token) {
        var privateKey = req.app.get('secret')
        jwt.verify(token, privateKey, {
            ignoreExpiration: true
        }, (err, decoded_jwt) => {
            if (err) {
                return res.status(200).send({
                    data: {},
                    status: 403,
                    message: err.message
                });
            } else {
                req.decoded = decoded_jwt;
                next();
            }
        });
    } else {
        return res.status(200).send({
            data: {},
            status: 403,
            message: 'token is missing'
        });
    }

}
