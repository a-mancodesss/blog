export const metadata = {
  title: "Blogs Page",
  description: "Blogs description",
};

import PostCard from 'src/components/PostCard/PostCard'
import { getPosts } from 'src/database/action'
const BlogPosts = async() => {
 const blogPosts = await getPosts();

  return (<div className='my-4 flex flex-col sm:flex-row w-[90%] m-auto sm:w-fit sm:flex-wrap justify-center gap-4 sm:gap-12'>
 
    {blogPosts.map((post, index) => ( 
      <PostCard key={index} id={post.id} title={post.title} author={post.userId} description={post.description} imgUrl={post.imgUrl} slug={post.slug} />
    ))}
    </div>
  )
}

export default BlogPosts