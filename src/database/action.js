"use server"//making server actions
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connect";
import { Post,User } from "./model";
export const addPost = async (formData) => {
    try{
        console.log("Reached into addPost function ***********")
        connectToDb();
        const {title,description,imgUrl,userId} = Object.fromEntries(formData);  
        // console.log(title,description,imgUrl,userId)
        const newPost = new Post({title,description,imgUrl,userId});
        await newPost.save();
        revalidatePath('/blog');
    }
    catch(e){
        console.log('Error in adding post to db',e)
    }
   
}