"use client"
import React from 'react'
import { ArrowBigUp, Plus } from 'lucide-react'
import Link from 'next/link'

const ScrollToTop = () => {
  return (
    <div className='fixed bottom-[1rem] right-4 flex flex-col gap-3'>
      <Link href="/createPost">
        <div className="create border-0 rounded-full w-fit bg-orange-500 p-2 cursor-pointer hover:bg-orange-600 transition-colors shadow-md">
          <Plus size={32} color='#eeeeee'/>
        </div>
      </Link>
      <div className='rounded-full w-fit bg-orange-500 p-2 cursor-pointer hover:bg-orange-600 transition-colors shadow-md' 
           onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
        <ArrowBigUp size={32} color='#eeeeee'/>
      </div>
    </div>
  )
}

export default ScrollToTop