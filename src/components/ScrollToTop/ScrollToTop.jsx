"use client"
import React, { useState, useEffect } from 'react'
import { ArrowUp, Plus } from 'lucide-react'
import Link from 'next/link'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const toggleVisibility = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300)
        ticking = false
      })
    }

    toggleVisibility()
    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col gap-3 sm:gap-4 z-50 items-center'>
      
      {/* Create Post Action */}
      <Link href="/createPost" aria-label="Create new post">
        <div className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-accent text-white border border-accent hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 active:scale-95">
           <Plus size={28} className="transition-transform group-hover:rotate-90" />
           <span className="absolute right-full mr-4 px-3 py-1.5 bg-surface text-ink text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-line shadow-sm">
             Create Post
           </span>
        </div>
      </Link>

      {/* Scroll To Top */}
      <div 
        className={`flex items-center justify-center w-12 h-12 rounded-full bg-surface border border-line text-ink shadow-sm cursor-pointer hover:bg-paper hover:border-ink/40 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </div>

    </div>
  )
}

export default ScrollToTop
