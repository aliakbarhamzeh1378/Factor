const factor_model = require("../../../models/factorModel");
const user_model = require("../../../models/userModel");
const { FactorDtoClass } = require("../../../dto/factorDTO");

const { v4 } = require("uuid");
const FactorService = require("../../../services/factorService");
const factorService = require("../../../services/factorService");
const mongoose = require("mongoose");

module.exports = {
  GeFactor: async (req, res) => {
    let params = req.query;
    let body = req.body;
    let user = await user_model.findOne({ cell_phone: req.decoded.cell_phone });
    let data = [];
    factor_model
      .find({ user_id: user._id })
      .limit(5)
      .then((result) => {
        console.log(result);
        //todo rozhan please fix this :)
        return res.status(200).send({
          message: "فاکتور یافت شد",
          data: result,
        });
      })
      .catch((error) => {
        return res.status(404).send({
          message: "فاکتوری یافت نشد",
          data: {},
        });
      });
  },
  CreateFactor: async (req, res) => {
    let params = req.query;
    let body = req.body;
    let user = await user_model.findOne({ cell_phone: req.decoded.cell_phone });
    let data = await FactorService.CreateFactor(body, user);
    return res.status(201).send({
      message: "فاکتور ساخته شد",
      data: data,
    });
  },
  UpdateFactor: async (req, res) => {
    let params = req.query;
    let body = req.body;
    let factor_id = body.factor;
    let user = await user_model.exists({ cell_phone: req.decoded.cell_phone });
    let data;
    if (!user) {
      return res.status(401).send({
        message: "اول برو لاگین کن",
        data: {},
      });
    } else {
      let factor = await factor_model.findById(factor_id);
      if (!factor) {
        return res.status(404).send({
          message: "فاکتور رو پیدا نکردم ",
          data: {},
        });
      }

      try {
       
        data = await FactorService.UpdateFactor(body, user, factor);
        return res.status(200).send({
          message: "فاکتور آپدیت شد",
          data: {},
        });
      } catch (e) {
        return res.status(406).send({
          message: "here we have some error",
          data: e,
        });
      }
    }
  },
  DeleteFactor: async (req, res) => {
    let params = req.query;
    let body = req.body;
    let factor_id = params.factor;
    let user = await user_model.exists({ cell_phone: req.decoded.cell_phone });
    if (!user) {
      return res.status(401).send({
        message: "اول برو لاگین کن",
        data: {},
      });
    } else {
      let factor = await factor_model.findById(factor_id);
      if (!factor) {
        return res.status(404).send({
          message: "فاکتور رو پیدا نکردم ",
          data: {},
        });
      }

      try {
       
        data = await FactorService.DeleteFactor(factor);
        return res.status(200).send({
          message: "فاکتور حذف شدش",
          data: {},
        });
      } catch (e) {
        return res.status(406).send({
          message: "here we have some error",
          data: e,
        });
      }
    }
  },
};
