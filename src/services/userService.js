const user_model = require("../models/userModel");
const { UserDtoClass } = require("../dto/userDTO");
module.exports = {
  CreateUser: async (body, phone) => {
    return new Promise((resolve, reject) => {
      user_model.create(
        {
          email: body.email,
          username: body.username,
          cell_phone: phone,
          address: body.address,
          images: body.images,
        },
        function (err, item) {
          if (err) return reject(err);
          resolve(new UserDtoClass(item).getUserData());
        }
      );
    });
  },
  UpdateUser: async (body, phone) => {
    if (body["cell_phone"] != undefined) {
      delete body.cell_phone; // returns true
    }
    if (body["user_id"] != undefined) {
      delete body.user_id; // returns true
    }
    return new Promise((resolve, reject) => {
      user_model.findOneAndUpdate(
        { cell_phone: phone },
        {
          email: body.email,
          username: body.username,
          cell_phone: phone,
          address: body.address,
          images: body.images,
        },
        { upsert: true },
        function (err, item) {
          if (err) return reject(err);
          resolve({});
        }
      );

    });
  },
};
