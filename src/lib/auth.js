import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials'
import { connectToDb } from "src/database/connect";
import { User } from "src/database/model";
import bcrypt from 'bcryptjs'
import {authConfig} from './auth.config'

const login = async(credentials)=>{
  try{
    connectToDb()
    const user= await User.findOne({name:credentials.name})
    if(!user){
      throw('No user found')
    }
    const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)
    // console.log('+++++++++++++++++++++++++++++')
    // console.log(credentials.password,user.password,isPasswordCorrect)
    if(!isPasswordCorrect){
      throw('Password is incorrect')
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
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials){
        try{
          const user = await login(credentials)
          return user
        }
          catch(e){
          throw e
        }
      }
    }),
  ],
  callbacks:{
    async signIn({user, account, profile}){
        // console.log(user,account,profile)
        if(account.provider==='github'){
           connectToDb()
           try{

               const user = await User.findOne({email:profile.email})
               if(!user){
                const  newUser = new User({
                    name:profile.login,
                    email:profile.email,
                    imgUrl:profile.avatar_url,
                })
                await newUser.save();
               }
           }
           catch(e){
                console.log('Error in finding user',e)
                return false;
           }
        }
        return true;
    },
    ...authConfig.callbacks,
  }
});
