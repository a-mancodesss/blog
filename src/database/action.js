import mongoose from "mongoose";
import { connectToDb } from "./connect";
import { Post,User } from "./model";

export const getPosts = async () => {
     connectToDb();
    const posts = await Post.find({});
    console.log(posts)
    return posts;
}
export const getPost = async (slug) => {
    connectToDb();
    const post = await Post.findOne({slug});
    console.log(post)
    return post;
}
export const getUsers = async () => {
    connectToDb();
    const users = await User.find({});
    return users;
}