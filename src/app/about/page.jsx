import Image from 'next/image'
import React from 'react'
export const metadata = {
  title: "About Page",
  description: "About description",
};

export const AboutPage = () => {
  return (
    <div className="wrapper flex flex-col sm:flex-row sm:items-center sm:justify-around  gap-2 sm:gap-0 justify-center sm:text-xl mt-4">
      <div className="text left sm:w-1/2">
        
    <span> <span className='font-bold'>AmanLog </span> is a simple, user-friendly platform for creating and managing blogs. Built with <span className='font-bold'>Next.js and Tailwind CSS</span> , it allows users to write, edit, and publish posts effortlessly.<br/> <br/> With a clean interface and responsive design, BlogApp ensures a seamless blogging experience across all devices.<br/><br/> This project showcases my skills in modern web development, focusing on functionality, performance, and ease of use.</span>
      </div>
   
    <div className="imagecontainer rounded-full relative w-[22rem] h-[22rem] sm:w-[30rem] sm:h-[30rem] mx-auto my-8 border-opacity-20 overflow-visible">

      <Image fill className='bg-cover rounded-full ' src='https://pikaso.cdnpk.net/public/media/tti-examples/31.jpg' alt='about' />
    </div>
    </div>
  )
}
export default AboutPage
