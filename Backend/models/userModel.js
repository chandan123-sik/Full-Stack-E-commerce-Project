import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true, unique: true},
    password:{type:String, required: true},
    cartData:{type:Object, default:{}},
},{minimize: false});

// why minimize is false-
// By default, Mongoose removes empty objects from documents when saving.
// Setting minimize: false tells Mongoose to keep empty objects, like cardData: {}.


const userModel = mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;