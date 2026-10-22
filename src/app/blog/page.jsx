//import scrollToTop component
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'
import PostCard from '@/components/PostCard/PostCard'
import { getPosts } from '@/database/data'

export const metadata = {
  title: "Blogs Page",
  description: "Blogs description",
};

export const dynamic = "force-dynamic";

const BlogPosts = async() => {
 const blogPosts = await getPosts();

  return (
    <div className='min-h-screen py-10 relative'>
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight">Latest <span className="text-accent">Stories</span></h1>
        <p className="text-ink text-lg max-w-2xl mx-auto">Explore our collection of thoughts, tutorials, and insights.</p>
      </div>

      {blogPosts.length === 0 ? (
        <p className="text-center text-ink">No stories yet. Be the first to write one.</p>
      ) : (
        <div className='w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
          {blogPosts.map((post) => (
            <PostCard key={post._id} title={post.title} author={post.userId} description={post.description} imgUrl={post.imgUrl} slug={post._id} />
          ))}
        </div>
      )}
      
      <ScrollToTop/>
    </div>
  )
}

export default BlogPosts
