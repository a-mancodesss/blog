import { unstable_cache } from "next/cache";
import { isValidObjectId } from "mongoose";
import { connectToDb } from "./connect";
import { Post, User } from "./model";

const POST_PROJECTION = "title description imgUrl userId createdAt";
const POSTS_TAG = "posts";

// Plain objects are much cheaper to serialize into the RSC payload than
// Mongoose documents, and the data cache avoids hitting MongoDB on every view.
const normalizePost = (post) => {
  if (!post) return null;

  return {
    ...post,
    _id: post._id.toString(),
  };
};

const fetchPosts = async () => {
  await connectToDb();

  const posts = await Post.find()
    .select(POST_PROJECTION)
    .sort({ createdAt: -1 })
    .lean();

  return posts.map(normalizePost);
};

const fetchPost = async (id) => {
  await connectToDb();

  const post = await Post.findById(id).select(POST_PROJECTION).lean();

  return normalizePost(post);
};

export const getPosts = unstable_cache(fetchPosts, ["blog-posts"], {
  tags: [POSTS_TAG],
  revalidate: 60,
});

const getCachedPost = unstable_cache(fetchPost, ["blog-post"], {
  tags: [POSTS_TAG],
  revalidate: 60,
});

export const getPost = (id) => {
  if (!id || !isValidObjectId(id)) return Promise.resolve(null);

  return getCachedPost(id);
};

export const getUsers = async () => {
  await connectToDb();

  return User.find().select("name email isAdmin").lean();
};
