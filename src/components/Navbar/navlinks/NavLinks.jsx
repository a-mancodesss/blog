import React from 'react'
import Links from './links/Links'
import { auth } from '@/lib/auth'

const nav =[
       
        {title: 'Home', path: '/'},
        {title:'CreatePost',path:'/createPost'},
        {title: 'Blog', path: '/blog'},

    
]
const NavLinks = async() => {
  const session = await auth()
  return (
    <>
        <Links session={session} nav={nav}/>
    </>
    )
}

export default NavLinks