import { addPost } from '@/database/action'
import { auth } from '@/lib/auth'

const CreatePostPage = async () => {
  const session = await auth()
  const author = session?.user?.name

  return (
    <div className="flex justify-center items-center py-10 min-h-[calc(100vh-200px)] relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="w-full max-w-2xl bg-slate-900/50 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/10 relative z-10">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Create a New Post</h1>
        <form action={addPost} className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-slate-400 text-xs uppercase tracking-wider font-semibold ml-1">Title</label>
            <input 
              type="text" 
              name="title" 
              id="title" 
              placeholder="Enter post title" 
              className="w-full bg-slate-950/50 text-white p-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition duration-200 placeholder:text-slate-600"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="desc" className="text-slate-400 text-xs uppercase tracking-wider font-semibold ml-1">Description</label>
            <textarea 
              name="description" 
              id="desc" 
              rows={6}
              placeholder="Write your story..." 
              className="w-full bg-slate-950/50 text-white p-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition duration-200 resize-none placeholder:text-slate-600"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="imgUrl" className="text-slate-400 text-xs uppercase tracking-wider font-semibold ml-1">Cover Image</label>
            <input 
              type="file" 
              name="imgUrl" 
              id="imgUrl" 
              className="w-full bg-slate-950/50 text-slate-400 rounded-lg border border-slate-700 file:bg-slate-800 file:text-orange-500 file:border-0 file:py-2 file:px-4 file:mr-4 file:font-semibold file:cursor-pointer hover:file:bg-slate-700 cursor-pointer transition duration-200"
              accept="image/*"
              required
            />
          </div>

          <input type="hidden" value={author} name="userId" id="userId" />

          <button 
            type="submit" 
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-[1.01] active:scale-[0.99] shadow-lg hover:shadow-orange-500/20"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreatePostPage
