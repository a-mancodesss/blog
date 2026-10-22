import { addPost } from '@/database/action'
import { auth } from '@/lib/auth'

const CreatePostPage = async () => {
  const session = await auth()
  const author = session?.user?.name

  return (
    <div className="flex justify-center items-center py-10 min-h-[calc(100vh-200px)] relative overflow-hidden">
      <div className="w-full max-w-2xl bg-surface p-8 rounded-xl shadow-sm border border-line relative z-10">
        <h1 className="font-display text-3xl font-semibold mb-8 text-center text-ink">Create a New Post</h1>
        <form action={addPost} className="flex flex-col gap-6">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-ink text-xs uppercase tracking-wider font-semibold ml-1">Title</label>
            <input 
              type="text" 
              name="title" 
              id="title" 
              placeholder="Enter post title" 
              className="w-full bg-white text-ink p-3 rounded-lg border border-line focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition duration-200 placeholder:text-muted/60"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="desc" className="text-ink text-xs uppercase tracking-wider font-semibold ml-1">Description</label>
            <textarea 
              name="description" 
              id="desc" 
              rows={6} 
              placeholder="Write your story..." 
              className="w-full bg-white text-ink p-3 rounded-lg border border-line focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition duration-200 resize-none placeholder:text-muted/60"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="imgUrl" className="text-ink text-xs uppercase tracking-wider font-semibold ml-1">Cover Image</label>
            <input 
              type="file" 
              name="imgUrl" 
              id="imgUrl" 
              className="w-full bg-white text-ink rounded-lg border border-line file:bg-paper file:text-ink file:border-0 file:py-2 file:px-4 file:mr-4 file:font-semibold file:cursor-pointer hover:file:bg-line/50 cursor-pointer transition duration-200"
              accept="image/*"
              required
            />
          </div>

          <input type="hidden" value={author} name="userId" id="userId" />

          <button 
            type="submit" 
            className="mt-6 w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreatePostPage
