import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    password:{
        type:String,
        required:true,
        min:8,
        max:20
    },
    imgUrl:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true});

const postSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    description:{
        type:String,
        required:true,
        min:3,
        max:225
    },
    imgUrl:{
        type:String,
        default:""
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required:true,
    },
    slug:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true});

export const User = models?.User || model('User',userSchema); 
export const Post = models?.Post || model('Post',postSchema); 