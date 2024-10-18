"use client"
import React from 'react'

const Form = () => {
    const formAction = (formData)=>{
console.log('Form Data:',formData.get("name"))
    }
  return (
    <form action={formAction}>
  <input type="text" placeholder="Username" name="name" />
    <input type="email" placeholder="Email" name="email" />
    <input type="password" placeholder="Password" name="password" />
    <input
      type="password"
      placeholder="Password again"
      name="passwordRepeat"
      />
    <input type="text" placeholder="ImageUrl" name="imgUrl" />
<button type='submit'>submit</button>
    </form>
  )
}

export default Form