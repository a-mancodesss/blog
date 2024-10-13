"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
const TestNavigation = () => {
    const router = useRouter()
    const pathname = usePathname()
    const handleClick = () => {
        router.push('/about')
    }
    const backClick = () => {
        router.back()
    }
    const forwardClick = () => {
        router.forward()
    }
    console.log(pathname)
  return (
    
    <div>
        <button onClick={handleClick}>Go to about</button>
        <button onClick={backClick}>Got to back page</button>
        <button onClick={forwardClick}>Got forward</button>
    </div>
  )
}

export default TestNavigation