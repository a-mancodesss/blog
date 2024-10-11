import Link from 'next/link'
import React from 'react'
import NavLinks from './navlinks/NavLinks'
import './MainNavbar.css'
const Navbar = () => {
  return (
    <div className='flex justify-between py-4 items-center h-[3rem] bg-slate-900  text-white px-4 sm:px-14'>
        <Link href={'/'} className='logo'>Logo</Link>
        <NavLinks/>
    </div>
  )
}

export default Navbar