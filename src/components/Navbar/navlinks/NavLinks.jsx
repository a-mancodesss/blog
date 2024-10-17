import React from 'react'
import Links from './links/Links'
import { auth } from 'src/lib/auth'

const nav =[
       
        {title: 'Home', path: '/'},
        {title:'CreatePost',path:'/createPost'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
        {title: 'Blog', path: '/blog'},
        {title: 'Register', path: '/register'},

    
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