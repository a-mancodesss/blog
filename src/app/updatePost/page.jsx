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
        <input className='w-[250px] file:bg-slate-950 file:text-orange-400 file:border-0 file:rounded-md border-none cursor-pointer'type="file" name="imgUrl" id="imgUrl" placeholder='Image' />
        <input type="hidden" value={author} name="userId" id="userId" placeholder='Author' />
        <button type="submit" className='mt-4 mx-auto w-[150px] text-white border-[1px] rounded-full border-orange-500 hover:bg-orange-500 py-2'>Update</button>

    
    </form>
    </div>
  )
}

export default page