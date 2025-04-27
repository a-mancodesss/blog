
import Link from 'next/link';
import { deletePost } from '@/database/action';
import {getPost} from '@/database/data'
import { auth } from '@/lib/auth';
import { Delete, Pencil, PenLine, Trash } from 'lucide-react';
export const SinglePostPage = async({params}) => {
const {postId}= params


const post = await getPost(postId, { cache: 'no-store' });  
const session = await auth()
  return (
    <div className='singlePostContainer flex min-h-screen gap-4 flex-col sm:flex-row'>
      <div className="left sm:w-2/5 w-full sm:block py-4  ">
      <div className="left-image-container relative">
        <img  fill className="object-cover border-0 rounded-2xl" src={post.imgUrl || "https://dummyimage.com/600x400/000/fff"} alt="image" />
      </div>
      </div>

      <div className="right-box w-full  overflow-y-auto ">
      <div className="my-2 sm:m-4 flex flex-col gap-8">
        <div className="title text-2xl sm:text-3xl  font-bold">{post.title}</div>

        <div className="profile flex gap-6 text-sm justify-start items-stretch  sm:justify-normal  font-light ">
          <div className="author">
            <div className="author-key font-semibold text-orange-400">
              Author
            </div>
            <div className="author-value">
              {post.userId}
            </div>
          </div>
          <div className="vbar min-h-full w-0.5 bg-orange-500 a"></div>
          <div className="published">
            <div className="published-key font-semibold text-orange-400">Published</div>
            <div className="published-value">{new Date(post.createdAt)?.toLocaleString('en-US', { timeZone: 'Asia/Kathmandu',year: 'numeric',
    month: 'long',
    day: 'numeric' })}</div>
          </div>
          <form className="delete" action={deletePost}>
          <input type="hidden" name="id" value={postId} />
          {post.userId === session?.user?.name && ( <div className='h-full flex justify-evenly gap-4 items-center'> <button><Trash color='#f26363'/></button>  <Link href={`/updatePost?id=${postId}`}><Pencil color='lightgreen'/></Link> </div>)}
            </form>
            {/* <form className='update' action={updatePost}>
              <input type="hidden" name="id" value={postId} />
            {post.userId !== session?.user?.name && (
              <Link href="/createPost">Update</Link>
            )}
            </form> */}
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

