import Image from 'next/image'
import React from 'react'
export const AboutPage = () => {
  return (
    <div className="wrapper flex flex-col sm:flex-row sm:items-center sm:justify-around mt-6 gap-10 sm:gap-0 justify-center">
      <div className="text left sm:w-1/2">
        
      <span className='font-bold'>Welcome</span> to our blog! Here, we share insights, stories, and tips on a variety of topics that inspire and inform. Our mission is to create a vibrant community where ideas flourish and voices are heard. Whether you're looking for lifestyle advice, tech trends, or personal development strategies, you'll find valuable content tailored just for you. Join us on this journey of exploration and discovery!

      </div>
    <div className='imageContainer  '>
      <Image src='/about.png' alt='about' height={500} width={500}/>
    </div>
    </div>
  )
}
export default AboutPage
