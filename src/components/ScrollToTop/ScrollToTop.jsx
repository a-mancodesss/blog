"use client"
import React, { useState, useEffect } from 'react'
import { ArrowUp, Plus } from 'lucide-react'
import Link from 'next/link'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col gap-3 sm:gap-4 z-50 items-center'>
      
      {/* Create Post Action */}
      <Link href="/createPost" aria-label="Create new post">
        <div className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] border border-orange-400 hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 active:scale-95">
           <Plus size={28} className="transition-transform group-hover:rotate-90" />
           <span className="absolute right-full mr-4 px-3 py-1.5 bg-slate-900/80 backdrop-blur-md text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10 shadow-xl">
             Create Post
           </span>
        </div>
      </Link>

      {/* Scroll To Top */}
      <div 
        className={`flex items-center justify-center w-12 h-12 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-slate-300 shadow-lg cursor-pointer hover:bg-slate-800/80 hover:text-white hover:border-orange-500/30 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </div>

    </div>
  )
}

export default ScrollToTop
