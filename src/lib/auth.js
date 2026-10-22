import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDb } from "@/database/connect";
import { User } from "@/database/model";
import bcrypt from 'bcryptjs'
import {authConfig} from './auth.config'

const login = async(credentials)=>{
  try{
    await connectToDb()
    const user= await User.findOne({email:credentials.email})
    if(!user){
      throw new Error('No user found with that email, please register first.')
    }
    const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)
    if(!isPasswordCorrect){
      throw new Error('Password is incorrect, please try again.')
    }

    // Return the fields NextAuth needs instead of the full Mongoose document
    // (which also contains the password hash).
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    };
}
catch(e){
  throw e;
  
}
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      name:'Credentials',
      async authorize(credentials){
        try{
          const user = await login(credentials)   
          return user       
      }
    catch(e){
          console.error('Login error------>',e)
          return null // Return null to trigger `result.error` in `signIn`
        }
      }
    }),
  ],
  callbacks:{
    ...authConfig.callbacks,
  }
});
