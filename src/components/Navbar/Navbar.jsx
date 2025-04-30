import Link from 'next/link'
import React from 'react'
import NavLinks from './navlinks/NavLinks'
import './MainNavbar.css'
const Navbar = () => {
  return (
    <div className='flex justify-between sm:justify-around py-4 items-center h-[3rem] text-white px-4 sm:px-12'>
        <Link href={'/'} className='logo'>AmanLog</Link>
        <NavLinks/>
    </div>
  )
}

export default Navbar