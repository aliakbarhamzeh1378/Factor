const factor_model = require("../models/factorModel");
const { FactorDtoClass } = require("../dto/factorDTO");
const mongoose = require("mongoose");

module.exports = {
  CreateFactor: async (body, user) => {
    return new Promise((resolve, reject) => {
      factor_model.create(
        {
          user_id: user._id,  
        products: body
        },
        function (err, item) {
          if (err) return reject(err);
          resolve(new FactorDtoClass(item).getFactorData());
        }
      );
    });
  },

  UpdateFactor: async (body, user, factor) => {
    if (body["user_id"] != undefined) {
      delete body.user_id;
    }

    return new Promise((resolve, reject) => {
      factor_model.findOneAndUpdate(
        { _id: mongoose.Types.ObjectId(factor.id) },
        {
          date: body.date,
          seller: body.seller,
          buyer: body.buyer,
          product: body.product,
          count: body.count,
          user_id: user._id,
        },
        { upsert: true },
        function (err, item) {
          if (err) return reject(err);
          resolve(new FactorDtoClass(item).getFactorData());
        }
      );
    });
  },

  DeleteFactor: async (factor) => {
    return new Promise((resolve, reject) => {
      factor_model.findOneAndDelete(
        { _id: mongoose.Types.ObjectId(factor.id) },

        function (err, item) {
          if (err) return reject(err);
          resolve(new FactorDtoClass(item).getFactorData());
        }
      );
    });
  },
};
