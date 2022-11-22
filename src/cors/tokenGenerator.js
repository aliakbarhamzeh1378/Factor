let jwt = require('jsonwebtoken');
let generate_token = async (payload, secret) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            secret, {
                expiresIn: 10000
            },
            (err, token) => {
                if (err) throw err;
                resolve(token);
            }
        );
    });


}


module.exports = {
    generate_token,
};
