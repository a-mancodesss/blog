import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
export const socials = [
  {   id:1,
      image: '/gh.svg',
      link: 'https://github.com/a-mancodesss',
  },  
  {   id:2,
      image: '/linkedIn.svg',
      link: 'https://www.linkedin.com/in/aman-partel-a57061265/',
  },
  {   id:3,
      image: '/behance.svg',
      link: 'https://www.behance.net/amanpartel',
  },
  {   id:4,
      image: '/insta.svg',
      link: 'https://www.instagram.com/a.mannn___/',
  },
  {   id:5,
      image: '/fb.svg',
      link: 'https://www.facebook.com/aman.p2004515',
  },
]
export const ContactPage = () => {
  return (
    <div className='main flex flex-col sm:flex-row h-[calc(100vh-12rem)] sm:h-[calc(100vh-6rem)] sm:text-xl justify-between '>



        <div className="left flex flex-col sm:w-1/2 my-auto">
        <div className="container border border-black rounded-md sm:p-[4rem] sm:w-4/6 m-auto flex flex-col gap-6 mt-6 p-[2rem]">
          <div className="mail-phone">
            <div className="phone flex justify-between">

                <div className="phone">Phone</div>
                <div className="phone">+977 9811492186</div>
            </div>
            <div className="mail flex justify-between">

                  <div className="mail">Mail</div>
                  <div className="mail">amanpartelyt@gmail.com</div>
          </div>
          </div>
          <div className="line bg-slate-900 h-[.1px] w-full"></div>
          <div className="socials">
          <div>Socials</div>
          <div className="social-wrapper flex justify-between">
            {socials.map((social)=>(
              <Link href={social.link} key={social.id} className="social">
                <Image className='sm:hover:-translate-y-2 transition-all duration-500' src={social.image} alt={social.image} width={30} height={30} />
                </Link>
            ))}
          </div>

          </div>
        </div>
        </div>




        <div className="right flex justify-center items-center sm:w-1/2">
        <Image src={'/contact.png'} alt='contact' width={500} height={500} />
        </div>
    </div>
  )
}
export default ContactPage

