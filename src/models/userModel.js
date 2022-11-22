const mongoose = require("mongoose");
const {UserType} = require("../constant/enum");
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    email: {
        type: String,
        default: "",
        unique: true,
    },
    cell_phone: {
        type: String,
        default: "",
        unique: true,
    },
    username: {
        type: String,
        default:""
    },
    address: {
        type: String,
        default: ""
    },
    images: {
        type: String,
        default: "",
    },


}, {
    strict: true
});
module.exports = mongoose.model('user_model', UserSchema)
