"use server"//making server actions
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connect";
import { Post,User } from "./model";
import { redirect } from "next/navigation";
export const addPost = async (formData) => {
    const {title,description,imgUrl,userId} = Object.fromEntries(formData);  
    try{
        
        connectToDb();
        const newPost = new Post({title,description,imgUrl,userId});
        await newPost.save();
        revalidatePath('/blog')
        
    }
    catch(e){
        console.log('Error in adding post to db',e)
    }
    redirect('/blog')
   
}
export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try{
        
        connectToDb();
        console.log(id);
        await Post.findByIdAndDelete(id);
         revalidate('/blog')
    }
    catch(e){
        console.log('Error in adding post to db',e)
    }
    console.log('i am about to redirect *****************')
    redirect('/blog');

   
}