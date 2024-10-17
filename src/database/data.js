import { revalidatePath } from "next/cache";
import { connectToDb } from "./connect";
import { Post,User } from "./model";


export const getPosts = async () => {
    try{
        connectToDb();
        const posts = await Post.find();
        revalidatePath('/blog')
        return posts;
    }
    catch(e){
        console.log('Error in fetching posts',e);
    }
  
}
export const getPost = async (id) => {
    connectToDb();
    const post = await Post.findById(id);
    revalidatePath('/blog')

    return post;
}
export const getUsers = async () => {
    connectToDb();
    const users = await User.find({});
    return users;
}
