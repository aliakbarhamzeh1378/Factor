const user_model = require('../models/userModel')
const {UserDtoClass} = require("../dto/userDTO");
module.exports = {
    CreateUser: async (body, phone) => {

        return new Promise((resolve, reject) => {
            user_model.create({
                email: body.email,
                username: body.username,
                cell_phone: phone,
                address: body.address,
                images: body.images
            }, function (err, item) {
                if (err) return reject(err);
                resolve(new UserDtoClass(item).getUserData());
            });

        })
    },


}

