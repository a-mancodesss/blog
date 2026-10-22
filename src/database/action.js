"use server"; // making server actions
import bcrypt from "bcryptjs";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDb } from "./connect";
import { Post, User } from "./model";
import { signIn, signOut } from "../lib/auth";
import { uploadImage } from "@/lib/uploadImage";

const POSTS_TAG = "posts";

const revalidatePosts = () => {
  // expire: 0 gives read-your-own-writes semantics, so a new/edited post is
  // visible immediately instead of serving the previous cached list.
  revalidateTag(POSTS_TAG, { expire: 0 });
  revalidatePath("/blog");
};

export const addPost = async (formData) => {
  const { title, description, imgUrl, userId } = Object.fromEntries(formData);

  try {
    // Upload and connect in parallel; both are independent.
    const [url] = await Promise.all([uploadImage(imgUrl), connectToDb()]);

    const newPost = new Post({ title, description, imgUrl: url, userId });
    await newPost.save();

    revalidatePosts();
  } catch (e) {
    console.error("Error in adding post to db", e);
  }

  redirect("/blog");
};

export const updatePost = async (formData) => {
  const { id, title, description, imgUrl, userId } = Object.fromEntries(formData);

  try {
    if (imgUrl && imgUrl.size > 0) {
      const [, url] = await Promise.all([connectToDb(), uploadImage(imgUrl)]);
      await Post.findByIdAndUpdate(
        id,
        { title, description, imgUrl: url, userId },
        { new: true }
      );
    } else {
      await connectToDb();
      await Post.findByIdAndUpdate(
        id,
        { title, description, userId },
        { new: true }
      );
    }

    revalidatePosts();
  } catch (e) {
    console.error("Error in updating post to db", e);
  }

  redirect("/blog");
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDb();
    await Post.findByIdAndDelete(id);
    revalidatePosts();
  } catch (e) {
    console.error("Error in deleting post from db", e);
  }

  redirect("/blog");
};

export const handleLogout = async () => {
  await signOut();
  console.log("Logged out successfully ✅");
  revalidatePath("/login");
};

export const handleCredentialLogin = async (formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      throw new Error(res.error);
    }

    return { success: "Logged in successfully" };
  } catch (e) {
    console.error("The actual error---->", e.message);
    return { error: "Invalid Credentials" };
  }
};

export const handleRegister = async (formData) => {
  const { name, email, password, passwordRepeat } = Object.fromEntries(formData);

  try {
    if (password !== passwordRepeat) {
      throw new Error("Passwords do not match");
    }

    await connectToDb();

    const user = await User.findOne({ email: email });
    if (user) {
      throw new Error("User already exists with that email");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return { success: "User registered successfully" };
  } catch (e) {
    console.error(e);
    return { error: e.message ?? "Something went wrong" };
  }
};
