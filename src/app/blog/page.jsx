export const metadata = {
  title: "Blogs Page",
  description: "Blogs description",
};
//import scrollToTop component
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import PostCard from '@/components/PostCard/PostCard'
import { getPosts } from '@/database/data'

const BlogPosts = async() => {
 const blogPosts = await getPosts({cache: 'no-store'});

  return (
    <div className='min-h-screen py-10 relative'>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Latest <span className="text-orange-500">Stories</span></h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Explore our collection of thoughts, tutorials, and insights.</p>
      </div>

      <div className='w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        {blogPosts.map((post, index) => ( 
          <PostCard key={index} title={post.title} author={post.userId} description={post.description} imgUrl={post.imgUrl} slug={post._id} />
        ))}
      </div>
      
      <ScrollToTop/>
    </div>
  )
}

export default BlogPosts
