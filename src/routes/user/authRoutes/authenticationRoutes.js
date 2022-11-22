const router = require('express').Router();
const AuthenticationController = require('./authenticationController');
const RouteConstant = require('../../../constant/Routes');


module.exports = (app) => {
    router.route('/send-otp')
        .post(
            AuthenticationController.SendOTP
        );
    router.route('/check-otp')
        .post(
            AuthenticationController.CheckOTP
        );

    app.use(
        RouteConstant.Auth,
        router
    );
};
