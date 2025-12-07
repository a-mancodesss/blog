import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  return (
      <footer className='w-full border-t border-white/10 bg-slate-950/70 backdrop-blur-md text-center py-4'>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <p className='text-slate-400 text-sm'>Built by  <span className='font-bold text-slate-300'>Aman</span></p>
      </div>
    </footer>
  )
}

export default Footer
