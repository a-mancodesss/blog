export const metadata = {
  title: "Blogs Page",
  description: "Blogs description",
};

import PostCard from 'src/components/PostCard/PostCard'
import { getPosts } from 'src/database/data'
const BlogPosts = async() => {
 const blogPosts = await getPosts({cache: 'no-store'});

  return (<div className='my-4 flex flex-col sm:flex-row w-[90%] m-auto sm:w-fit sm:flex-wrap justify-center gap-4 sm:gap-12'>
 
    {blogPosts.map((post, index) => ( 
      <PostCard key={index}  title={post.title} author={post.userId} description={post.description} imgUrl={post.imgUrl} slug={post._id} />
    ))}
    </div>
  )
}

export default BlogPosts