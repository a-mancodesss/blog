export const metadata = {
  title: "SingleBlogPage Page",
  description: "SingleBlogPage description",
};

import {getPost} from 'src/database/data'
export const SinglePostPage = async({params}) => {
const {postId}= params


const post = await getPost(postId, { cache: 'no-store' });  

console.log(post)
  return (
    <div className='singlePostContainer flex min-h-screen gap-4 '>
      <div className="left w-2/5 hidden sm:block py-4  ">
      <div className="left-image-container relative">
        <img  fill className="object-cover" src={post.imgUrl} alt="image" />
      </div>
      </div>

      <div className="right-box w-full  overflow-scroll ">
      <div className="my-2 sm:m-4 flex flex-col gap-8">
        <div className="title text-2xl sm:text-3xl  font-bold">{post.title}</div>
        <div className="profile flex gap-6 text-lg  font-light ">
          <div className="author">
            <div className="author-key font-semibold text-slate-700">
              Author
            </div>
            <div className="author-value">
              {post.userId}
            </div>
          </div>
          <div className="published">
            <div className="published-key font-semibold text-slate-700">Published</div>
            <div className="published-value">{post.createdAt?.toLocaleString()}</div>
          </div>
        </div>
        <div className="description text-lg sm:text-xl font-extralight text-pretty">
          {post.description}
        </div>
      </div>
      </div>
    </div>
  )
}
export default SinglePostPage

