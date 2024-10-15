import { model, models, Schema, Types } from "mongoose";

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
        default:"https://dummyimage.com/600x400/000/fff"
    },
    userId:{
        type: String,
        ref: 'User',
        default: 'Aman'
        // default: new  Types.ObjectId('670c05ff23d6eced860fb0b2')
        // required:true,
    },
 
},{timestamps:true});

export const User = models?.User || model('User',userSchema); 
export const Post = models?.Post || model('Post',postSchema); 