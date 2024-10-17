"use server"//making server actions
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connect";
import { Post,User } from "./model";
import { redirect } from "next/navigation";
import {signIn, signOut} from '../lib/auth'
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
    redirect('/blog');

   
}
export const handleGithubLogin = async() => {
   
    await signIn("github")
    console.log('Logged in successfully✅');
   
  }
export const handleLogout = async() => {
   
    await signOut("github")
    console.log('Logged out successfully✅');
   
  }
  export const hangleRegister = async (formData) => {
    const {name,email,password,passwordRepeat,imgUrl} = Object.fromEntries(formData);
    if(password !== passwordRepeat){
        console.log('Passwords do not match ❗');
       return;
    }
    try{
        connectToDb();
        const user = await User.findOne({name:name});
        if(user){
            console.log('User already exists❗');
            return;
         
        }
        const newUser = new User({name,email,password,imgUrl});
        await newUser.save();
        console.log('Registered successfully✅');
    }
    catch(e){
        console.log('Error in adding user to db',e)
    }
    redirect('/login');
}