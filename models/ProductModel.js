const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating our Product Schema with it's elements
const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: {  type: String, required: true },
  provider: { type: Schema.Types.ObjectId, ref: "user", required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true},
  creationDate: { type: Date, default: Date.now }
});


module.exports = mongoose.model("product", ProductSchema);
