import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
      <footer className='w-full border-t border-line bg-transparent text-center'>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <p className='text-ink text-sm'>Built by  <span className='font-bold text-ink'>
        <Link href="https://amanbagale.vercel.app" target='_blank' className='hover:text-accent transition-colors'>Aman</Link>
        </span></p>
      </div>
    </footer>
  )
}

export default Footer
