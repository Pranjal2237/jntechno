import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true,'email already exist']
    },
    position:{
        type:String,
        required:[true,'Position is required']
    },
    password:{
        type:String,
        required:[true,'Password is required']
    }
},{timestamps:true})

export const Users=mongoose.models.users || mongoose.model("users",userSchema);