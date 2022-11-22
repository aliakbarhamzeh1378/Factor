const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OtpSchema = new Schema({
    code: {
        type: String,
    },
    created_date: {
        type: Date,

    },
    cell_phone:{
        type: String,
        unique: true
    }

});
module.exports = mongoose.model('otp_model', OtpSchema)
