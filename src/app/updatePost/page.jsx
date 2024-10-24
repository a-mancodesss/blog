import './updatePost.css'
import { updatePost } from '@/database/action'
import { auth } from '@/lib/auth'
const page = async({searchParams}) => {
const session = await auth()
const {id}= searchParams
const author = session?.user?.name
// console.log('post before dispatch: ',id)
  return (
    <div className='border mx-auto border-black  sm:w-1/2 w-5/6 py-20'>
      
      <form action={updatePost} className='form-container' >

        <h1 className='text-2xl font-bold'>Create Post</h1>
        <input type="hidden" name="id" value={id} />
        <input type="text" name="title" id="title" placeholder='Title' />
        <input type="text" name="description" id="desc" placeholder='Description...' />
        <input type="text" name="imgUrl" id="imgUrl" placeholder='Image Url' />
        <input type="hidden" value={author} name="userId" id="userId" placeholder='Author' />
        <button type="submit" className='bg-blue-950 w-full text-white py-2'>Submit</button>

    
    </form>
    </div>
  )
}

export default page