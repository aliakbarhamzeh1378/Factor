const router = require("express").Router();
const FactorController = require("./factorController");
const RouteConstant = require("../../../constant/Routes");
const Middleware = require("../../../cors/middleware").checkToken;

module.exports = (app) => {
  router
    .route("/")
    .get(FactorController.GeFactor)

  router
    .route("/factor")
    .put(FactorController.UpdateFactor)
    .post(FactorController.CreateFactor)
    .delete(FactorController.DeleteFactor)

  app.use(RouteConstant.Factor, Middleware, router);
};
