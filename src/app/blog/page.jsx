import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <div>
    <div className='card-container flex flex-col sm:flex-row gap-4 items-center'>
      <div className="group max-w-fit border  shadow-sm  shadow-blue-700/[50%] rounded-md px-2 py-4 sm:max-w-fit flex flex-col  sm:h-max cursor-pointer">

      <div className="top w-[315px] overflow-hidden  relative">
          <div className=" transition-all duration-300 image-container relative   h-[150px] w-[300px] sm:h-[300px]">
          <Image className='object-cover rounded-md ' src={'https://images.pexels.com/photos/27872910/pexels-photo-27872910/free-photo-of-a-lake-with-turquoise-water-and-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} fill/>
          </div>
      
      </div>

    <div className="bottom flex flex-col sm:flex-row sm:items-center ">
      <div className="left " >
          <div className=" text-container sm:w-[200px] flex flex-col flex-wrap ">
            <div className="text-xl font-bold">Title</div>
            <div className="text-gray-500">Aman P.</div>
            <p className="">Development and Engineering Journey.</p>
            </div>
      </div>
      <div className="right text-blue-900 font-semibold ">
         <Link href={`blog/slug`} className='underline'>Read more...</Link>
      </div>
      </div>
          
    </div>
      

    </div>
    </div>
  )
}

export default BlogPage