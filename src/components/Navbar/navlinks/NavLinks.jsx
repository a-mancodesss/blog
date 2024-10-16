import React from 'react'
import Links from './links/Links'
const nav =[
       
        {title: 'Home', path: '/'},
        {title:'CreatePost',path:'/createPost'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
        {title: 'Blog', path: '/blog'},

    
]
const NavLinks = () => {
  return (
    <>
        <Links nav={nav}/>
    </>
    )
}

export default NavLinks