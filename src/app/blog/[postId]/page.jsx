import Link from 'next/link';
import { notFound } from 'next/navigation';
import { deletePost } from '@/database/action';
import { getPost } from '@/database/data'
import { auth } from '@/lib/auth';
import { Pencil, Trash, Calendar, User, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export const dynamic = "force-dynamic";

export const SinglePostPage = async({params}) => {
const { postId } = await params

const [post, session] = await Promise.all([getPost(postId), auth()]);

if (!post) {
  notFound();
}

  return (
    <div className='min-h-screen py-10 px-4 sm:px-6 relative'>
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-ink/80 hover:text-accent mb-8 transition-colors group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to blogs
        </Link>

        <div className="flex flex-col gap-8">
          
          {/* Header Section */}
          <div className="space-y-6 text-center sm:text-left">
            <h1 className="text-3xl sm:text-5xl font-semibold text-ink leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-sm text-ink border-b border-line pb-8">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-accent-soft rounded-full text-accent">
                  <User size={16} />
                </div>
                <span className="font-medium text-ink">{post.userId}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-2 bg-ink/[0.04] rounded-full text-ink">
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
                   <Link href={`/updatePost?id=${postId}`} className="p-2 hover:bg-accent-soft rounded-full text-ink/70 hover:text-accent transition-colors" title="Edit Post">
                      <Pencil size={18}/>
                   </Link>
                   <form action={deletePost}>
                      <input type="hidden" name="id" value={postId} />
                      <button className="p-2 hover:bg-ink hover:text-white rounded-full text-ink/70 transition-colors" title="Delete Post">
                        <Trash size={18}/>
                      </button>
                   </form>
                </div>
              )}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-line bg-paper">
            <Image 
              src={post.imgUrl || "https://dummyimage.com/1200x600/f1eee8/8a837a"} 
              alt={post.title} 
              fill 
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              preload
            />
          </div>

          {/* Content Section */}
          <div className="prose prose-stone prose-lg max-w-none text-ink leading-relaxed font-normal text-lg prose-headings:text-ink prose-p:text-ink prose-a:text-accent hover:prose-a:text-accent-hover prose-strong:text-ink prose-code:text-accent prose-blockquote:border-accent prose-blockquote:text-ink">
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
