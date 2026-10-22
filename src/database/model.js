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
        min:8,
        max:20
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
    },
    description:{
        type:String,
        required:true,
    },
    imgUrl:{
        type:String,
        default:"https://dummyimage.com/600x400/000/fff"
    },
    userId:{
        type: String,
        ref: 'User',
        default: 'Aman'
   
    }
 
},{timestamps:true});

// The blog list is sorted newest-first; without this every request sorts in memory.
postSchema.index({ createdAt: -1 });

export const User = models?.User || model('User',userSchema); 
export const Post = models?.Post || model('Post',postSchema); 