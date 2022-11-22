const AuthenticationServices = require('../../../services/authenticationService');
const user_model = require('../../../models/userModel')
const otp_model = require('../../../models/otpModel')
const {CodeDTO} = require("./../../../dto/codeDto");

const {v4} = require('uuid');
const {generate_token} = require("../../../cors/tokenGenerator");

module.exports = {
    SendOTP: async (req, res) => {
        let params = req.query
        let body = req.body
        let otp = await otp_model.findOne({
            cell_phone: body.phone
        });
        let code = 0;
        if (otp == null) {
            code = await AuthenticationServices.sendOTPPassword(body.phone);
        } else {
            let expired = new CodeDTO(otp).checkExpiration()
            if (expired) {
                otp.remove()
                code = await AuthenticationServices.sendOTPPassword(body.phone);
                console.log(code)
            } else {
                code = otp
            }
        }
        console.log(code)

        return res.status(201).send({
            message: 'code send successfully',
            data: {
                code: code.code
            }
        });
    },
    CheckOTP: async (req, res) => {
        let params = req.query
        let body = req.body
        var privateKey = req.app.get('secret')
        let otp = await otp_model.findOne({
            cell_phone: body.phone,
            code: body.code
        });
        if (otp == null) {
            return res.status(406).send({
                message: 'ناموسا کد چرت و پرت وارد نکن',
                data: {}
            });
        } else {
            let expired = new CodeDTO(otp).checkExpiration()
            if (expired) {
                return res.status(406).send({
                    message: 'پاشو برو دوباره شماره بزن کد بگیر',
                    data: {}
                });
            } else {

                let user = await user_model.exists({
                    cell_phone: body.phone
                })
                let token = await  generate_token({cell_phone: body.phone}, privateKey)
                if (user) {
                    otp.remove()

                    return res.status(200).send({
                        message: 'بپر برو تو صفحه پتلت',
                        data: {
                            token:token
                        }
                    });
                } else {
                    otp.remove()

                    return res.status(201).send({
                        message: 'بپر برو تو صفحه  ثبت نام',
                        data: {
                            token:token
                        }
                    });
                }


            }
        }

    }
}
