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
          if(user){
            return user
          }
            throw('User not found')  
        }
          catch(e){
          throw e
        }
      }
    }),
  ],
  callbacks:{
    async signIn({user, account, profile}){
    
        if(account.provider==='github'){
           connectToDb()
           try{
         
               const dbUser = await User.findOne({email:profile.email})
               if(!dbUser){
                console.log('hey at middle when creating new')
                const  newUser = new User({
                    name:profile.login,
                    email:profile.email,
                    imgUrl:profile.avatar_url,
                    isAdmin:true,// if needed admin with gh account->will manually change this to true
                })
                await newUser.save();
                return dbUser;
               }
               console.log('The final source of truth: ',user)
           }
           catch(e){
                console.log('Error in finding user',e)
                return false;
           }
        }
        console.log('is it even passing right')
        return true;
    },
    ...authConfig.callbacks,
  }
});
