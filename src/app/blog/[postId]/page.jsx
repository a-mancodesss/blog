import Link from 'next/link';
import { deletePost } from '@/database/action';
import {getPost} from '@/database/data'
import { auth } from '@/lib/auth';
import { Pencil, Trash, Calendar, User, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export const SinglePostPage = async({params}) => {
const {postId}= params


const post = await getPost(postId, { cache: 'no-store' });  
const session = await auth()
  return (
    <div className='min-h-screen py-10 px-4 sm:px-6 relative'>
      {/* Background ambient light */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to blogs
        </Link>

        <div className="flex flex-col gap-8">
          
          {/* Header Section */}
          <div className="space-y-6 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-sm text-slate-400 border-b border-white/10 pb-8">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-500/10 rounded-full text-orange-400">
                  <User size={16} />
                </div>
                <span className="font-medium text-slate-200">{post.userId}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-500/10 rounded-full text-blue-400">
                   <Calendar size={16} />
                </div>
                <span>
                  {new Date(post.createdAt)?.toLocaleString('en-US', { 
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric' 
                  })}
                </span>
              </div>

              {post.userId === session?.user?.name && ( 
                <div className="flex items-center gap-3 ml-auto">
                   <Link href={`/updatePost?id=${postId}`} className="p-2 hover:bg-white/10 rounded-full text-green-400 transition-colors" title="Edit Post">
                      <Pencil size={18}/>
                   </Link>
                   <form action={deletePost}>
                      <input type="hidden" name="id" value={postId} />
                      <button className="p-2 hover:bg-white/10 rounded-full text-red-400 transition-colors" title="Delete Post">
                        <Trash size={18}/>
                      </button>
                   </form>
                </div>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-slate-900">
            <Image 
              src={post.imgUrl || "https://dummyimage.com/1200x600/1e293b/475569"} 
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed font-light text-lg">
            <ReactMarkdown>
              {post.description}
            </ReactMarkdown>
          </div>

        </div>
      </div>
    </div>
  )
}
export default SinglePostPage
