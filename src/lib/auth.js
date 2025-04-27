import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDb } from "@/database/connect";
import { User } from "@/database/model";
import bcrypt from 'bcryptjs'
import {authConfig} from './auth.config'

const login = async(credentials)=>{
  try{
    connectToDb()
    const user= await User.findOne({email:credentials.email})
    if(!user){
      throw('No user found with that email, please register first.')
    }
    const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)
    if(!isPasswordCorrect){
      throw('Password is incorrect, please try again.')
    }
    return user;
}
catch(e){
  throw e;
  
}
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials){
        try{
          const user = await login(credentials)   
          if(user){
            return user
          }
            throw('User not found with that email')  
        }
          catch(e){
          throw e
        }
      }
    }),
  ],
  callbacks:{
    ...authConfig.callbacks,
  }
});
