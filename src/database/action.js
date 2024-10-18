"use server"//making server actions
import bcrypt from 'bcryptjs';
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
        console.log('Logged in successfully ✅');
       
    
 
  }
export const handleLogout = async() => {
  
        await signOut()
        console.log('Logged out successfully✅');
        revalidate('/login')
    
 
   
  }


  export const handleCredentialLogin = async (formData) => {
    const {name,password} = Object.fromEntries(formData);
    let isError=false;
    try{
        await signIn('credentials',{name,password})
        console.log('Logged in successfully✅');
        
    }
    catch(e){
        console.log('❗Login Error :',e)
        isError=true;
        throw e;//added this to prevent REDIRECT_ERROR by using redirect 
    }
    if(!isError){

        redirect('/')
    }
  
}
  export const handleRegister = async (formData) => {
    let isError=false;
    const {name,email,password,passwordRepeat,imgUrl} = Object.fromEntries(formData);
    try{
        if(password !== passwordRepeat){
            throw('Passwords do not match❗');
    
        }
        connectToDb();
        const user = await User.findOne({name:name});
        if(user){
            throw('User already exists❗');
         
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({name,email,password:hashedPassword,imgUrl});
        await newUser.save();
        console.log('User registered successfully✅');
    }
    catch(e){
        console.error('Error: ',e)
        isError=true;
    }
    console.log('isError:',isError)
    if(!isError){
        redirect('/login')
    }
}