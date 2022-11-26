const user_model = require("../../../models/userModel");
const otp_model = require("../../../models/otpModel");
const { UserDtoClass } = require("./../../../dto/UserDto");

const { v4 } = require("uuid");
const UserServices = require("../../../services/userService");

module.exports = {
  GetUser: async (req, res) => {
    console.log(req.decoded.cell_phone);
    let user = await user_model.findOne({ cell_phone: req.decoded.cell_phone });
    if (user == null) {
      return res.status(406).send({
        message: "یوزرتو ندارم ببرش رجیسترش کن بدبخت",
        data: {},
      });
    } else {
      let dto = new UserDtoClass(user);
      return res.status(201).send({
        message: "code send successfully",
        data: dto.getUserData(),
      });
    }
  },
  CreateUser: async (req, res) => {
    let params = req.query;
    let body = req.body;
    let user = await user_model.exists({ cell_phone: req.decoded.cell_phone });
    let data;
    if (user) {
      return res.status(406).send({
        message: "یوزر از قبل وجود داره",
        data: {},
      });
    } else {
      data = await UserServices.CreateUser(body, req.decoded.cell_phone);
      return res.status(406).send({
        message: "یوزر ساخته شد",
        data: data,
      });
    }
  },
  UpdateUser: async (req, res) => {
    let params = req.query;
    let body = req.body;
    let user = await user_model.exists({ cell_phone: req.decoded.cell_phone });
    let data;
    if (user == null) {
      return res.status(406).send({
        message: "یوزر وجود ندارد",
        data: {},
      });
    } else {
      data = await UserServices.UpdateUser(body, req.decoded.cell_phone);
      return res.status(406).send({
        message: "یوزر ساخته شد",
        data: data,
      });
    }
  },
};
