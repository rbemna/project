const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
    image: { type:String, default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1sAIdwUrlUE1iiT1gOikcaX7gHq0YHqJG19ZH7MMWUJC7Zh4aMWEATPhyfRMWfHfXxg&usqp=CAU"},
    fullName: String,
    email:String,
    password: String,
    phone: String,
    adresse:String,
    role:String,

});
module.exports = model("user", userSchema);