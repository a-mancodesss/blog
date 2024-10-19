"use client"
import React from 'react'
import { ArrowBigUp } from 'lucide-react'
const ScrollToTop = () => {
  return (
    <>
          <div className=' fixed bg-slate-900 rounded-full w-fit bottom-[1rem] right-4 p-2' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
      <ArrowBigUp  size={32} color='#eeeeee'/>
       </div>
    </>
  )
}

export default ScrollToTop