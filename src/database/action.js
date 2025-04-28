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
    
    const storageRef = ref(storage, `images/${imgUrl.name}_${Date.now()}`);
    
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
    const storageRef = ref(storage, `images/${imgUrl.name}_${Date.now()}`);
    try{
        connectToDb();
        if(imgUrl && imgUrl.size>0){
            await uploadBytes(storageRef, imgUrl);
            const url = await getDownloadURL(storageRef);
            await Post.findByIdAndUpdate(id,{title,description,imgUrl:url,userId},{new:true});
        }
        // console.log('post id on server action:',id)
        else{
        await Post.findByIdAndUpdate(id,{title,description,userId},{new:true});
        }
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
export const handleLogout = async() => {
  
        await signOut()
        console.log('Logged out successfully✅');
        revalidatePath('/login')
    
 
   
  }


  export const handleCredentialLogin = async (formData) => {
    const {email,password} = Object.fromEntries(formData);
    try{
        const res =  await signIn('credentials',{email,password,redirect:false})
        if(res.error){
            throw new Error(res.error);
        }
        return { success: "Logged in successfully" };
    }
    catch(e){
        console.error('The actual error---->',e.message)
        return {error:'Invalid Credentials'}
     }
  
}
  export const handleRegister = async (formData) => {
    const {name,email,password,passwordRepeat} = Object.fromEntries(formData);
    try{
        if(password !== passwordRepeat){
            throw('Passwords do not match');
    
        }
        connectToDb();
        const user = await User.findOne({email:email});
        if(user){
            throw('User already exists with that email');
         
        }
        console.log('User found, code works 1')
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({name,email,password:hashedPassword});
        await newUser.save();
        return {success:'User registered successfully'};
    }
    catch(e){
        console.log(e)
        return {error:e}
    }
}