import './updatePost.css'
import { updatePost } from '@/database/action'
import { getPost } from '@/database/data'
import { auth } from '@/lib/auth'
const page = async({searchParams}) => {
const session = await auth()
const {id}= searchParams
const post = await getPost(id)
const author = session?.user?.name
// console.log('post before dispatch: ',id)
  return (
    <div className='border mx-auto border-black  sm:w-1/2 w-5/6 py-20'>
      
      <form action={updatePost} className='form-container' >

        <h1 className='text-2xl font-bold'>Create Post</h1>
        <input type="hidden" name="id" value={id} />
        <input type="text" name="title" id="title" placeholder='Title' defaultValue={post.title} />
        <input type="text" name="description" id="desc" placeholder='Description...' defaultValue={post.description} />
        <input type="text" name="imgUrl" id="imgUrl" placeholder='Image Url' defaultValue={post.imgUrl} />
        <input type="hidden" value={author} name="userId" id="userId" placeholder='Author' />
        <button type="submit" className='bg-blue-950 w-full text-white py-2'>Update</button>

    
    </form>
    </div>
  )
}

export default page