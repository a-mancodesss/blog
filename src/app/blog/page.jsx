import React from 'react'
import { blogPosts } from 'src/seed'
import PostCard from 'src/components/PostCard/PostCard'
const BlogPosts = () => {
  return (<div className='my-4 sm:flex flex-row sm:w-fit sm:flex-wrap justify-center  gap-y-4'>
    {blogPosts.map((post, index) => ( 
      <PostCard key={index} title={post.title} author={post.author} description={post.description} imageUrl={post.imageUrl} />
    ))}
    </div>
  )
}

export default BlogPosts