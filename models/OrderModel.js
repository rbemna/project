const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(

  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'product',
        },
        provider:{
          type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',

        }
        
      },
    ],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    status : {
      type:String,
      required:true,
      default:"enregistrée"
    },
      totalPrice : {
      type:Number,
      required:true,
     
    }

  },
  {
    timestamps: true,
  }

);

module.exports= mongoose.model("order", OrderSchema);
