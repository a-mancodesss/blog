"use server"//making server actions
import bcrypt from 'bcryptjs';
import { revalidatePath,revalidateTag } from "next/cache";
import { connectToDb } from "./connect";
import { Post,User } from "./model";
import { redirect } from "next/navigation";
import {signIn, signOut} from '../lib/auth'

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '@/config/firebaseConfig';

export const addPost = async (formData) => {
    const {title,description,imgUrl,userId} = Object.fromEntries(formData);  
    const timeStamp = Date.now();
    const storageRef = ref(storage, `images/${imgUrl.name}_${timeStamp}`);
    try{
        await uploadBytes(storageRef, imgUrl);
        const url = await getDownloadURL(storageRef);
        connectToDb();
        const newPost = new Post({title,description,imgUrl:url,userId});
        await newPost.save();
        revalidatePath('/blog')
        
    }
    catch(e){
        console.log('Error in adding post to db',e)
    }
    redirect('/blog')
   
}
export const updatePost = async (formData) => {
    const {id,title,description,imgUrl,userId} = Object.fromEntries(formData);
    let imageUrl = null;  
    if (imgUrl && imgUrl.name) {
        const storageRef = ref(storage, `images/${imgUrl.name}_${Date.now()}`); // Unique filename
        try {
            await uploadBytes(storageRef, imgUrl);
            imageUrl = await getDownloadURL(storageRef);
        } catch (error) {
            console.log('Error uploading image:', error);
        }
    }
    try{
        // console.log('post id on server action:',id)
        connectToDb();
        await Post.findByIdAndUpdate(id,{title,description,imgUrl:imageUrl||imgUrl,userId},{new:true});
        revalidatePath('/blog')
        
    }
    catch(e){
        console.log('Error in updating post to db',e)
    }
    redirect('/blog')
   
}
export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);
    try{
        
        connectToDb();
        console.log(id);
        await Post.findByIdAndDelete(id);
         revalidatePath('/blog')
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
        revalidatePath('/login')
    
 
   
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
        if(e?.message === 'NEXT_REDIRECT'){
            isError=false;
        }
        
        // throw e;//added this to prevent REDIRECT_ERROR by using redirect 
    }
    if(!isError){

        redirect('/')
    }
    revalidateTag('all')
  
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