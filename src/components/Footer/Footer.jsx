import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  return (
      <footer className='w-full border-t border-white/10 bg-slate-950/70 backdrop-blur-md text-center'>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <p className='text-slate-400 text-sm'>Built by  <span className='font-bold text-slate-300'>
        <Link href="https://amanbagale.vercel.app" target='_blank' className='hover:text-orange-500 transition-colors'>Aman</Link>
        </span></p>
      </div>
    </footer>
  )
}

export default Footer
