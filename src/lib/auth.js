import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "src/database/connect";
import { User } from "src/database/model";
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks:{
    async signIn({user, account, profile}){
        console.log(user,account,profile)
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
    }
  }
});
