const router = require('express').Router();
const ProfileController = require('./profileController');
const RouteConstant = require('../../../constant/Routes');
const Middleware = require('../../../cors/middleware').checkToken;


module.exports = (app) => {
    router.route('/profile')
        .get(
            ProfileController.GetUser
        )
        .post(
            ProfileController.CreateUser
        )
        .put(
            ProfileController.UpdateUser
        )


    app.use(
        RouteConstant.Profile,
        Middleware,
        router
    );
};
