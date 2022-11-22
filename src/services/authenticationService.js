const otp_model = require('../models/otpModel')
const {CodeDTO} = require("../dto/codeDto");
module.exports = {
    sendOTPPassword: async ( cell_phone) => {

        return new Promise((resolve, reject) => {
            otp_model.create({
                created_date:new Date(),
                code: Math.floor(Math.random() * (99999-10000)+10000),
                cell_phone: cell_phone
            }, function (err, item) {
                if (err) return reject(err);
                resolve(new CodeDTO(item).getCode());
            });

        })
    },


}

