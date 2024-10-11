import React from 'react'
// CardDemo({author,readTime,description,postImage,authorImage})
import { blogs } from '@/seed' 
import CardDemo from '@/components/blogPosts/blogPosts'

const BlogPage = () => {
  return (
    <div>
     {blogs.map((blog, index) => (
   <CardDemo key={index} author={blog.author} readTime={blog.readTime} description={blog.description} postImage={blog.postImage} authorImage={blog.authorImage} />
     )
     )}
    
    </div>
  )
}

export default BlogPage