import Link from 'next/link'
import React, { Suspense } from 'react'
import NavLinks from './navlinks/NavLinks'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-between sm:justify-around items-center h-[4.5rem] text-ink px-4 backdrop-blur-md bg-paper/90 border-b border-line transition-all duration-300'>
        <Link href={'/'} className='font-bold text-2xl tracking-tight text-ink hover:text-accent transition-colors duration-200'>
          Aman<span className="text-accent">Log</span>
        </Link>
        {/* Session lookup no longer blocks the page shell from streaming. */}
        <Suspense fallback={<div className="h-10 w-40" aria-hidden="true" />}>
          <NavLinks/>
        </Suspense>
    </div>
  )
}

export default Navbar
