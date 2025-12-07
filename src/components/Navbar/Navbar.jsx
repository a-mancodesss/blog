import Link from 'next/link'
import React from 'react'
import NavLinks from './navlinks/NavLinks'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-between sm:justify-around items-center h-[4.5rem] text-white px-4 sm:px-12 backdrop-blur-md bg-slate-950/70 border-b border-white/10 shadow-lg transition-all duration-300'>
        <Link href={'/'} className='font-bold text-2xl tracking-tight hover:text-orange-500 transition-colors duration-200'>
          Aman<span className="text-orange-500">Log</span>
        </Link>
        <NavLinks/>
    </div>
  )
}

export default Navbar
