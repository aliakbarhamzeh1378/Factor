var mongoose=require("mongoose");
const factorSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    products:[{
      date: {
        type: Date,
        default: Date.now(),
        required: true,
        trim: true,
      },
      seller: {
        type: String,
        required: true,
        trim: true,
      },
      buyer: {
        type: String,
        required: true,
        trim: true,
      },
      
      product: {
        type: String,
        required: true,
        trim: true,
      },
      count: {
        type: String,
        required: true,
        trim: true,
      }
}],
  
  
  });
module.exports =mongoose.model("factors", factorSchema);
