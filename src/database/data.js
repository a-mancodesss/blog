import { revalidatePath } from "next/cache";
import { connectToDb } from "./connect";
import { Post,User } from "./model";


export const getPosts = async () => {
     connectToDb();
    const posts = await Post.find({});
    console.log(posts)
    revalidatePath('/blog')
    return posts;
}
export const getPost = async (id) => {
    connectToDb();
    const post = await Post.findById(id);
    console.log(post)
    revalidatePath('/blog')

    return post;
}
export const getUsers = async () => {
    connectToDb();
    const users = await User.find({});
    return users;
}
