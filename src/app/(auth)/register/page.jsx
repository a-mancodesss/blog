import Link from 'next/link'
import React from 'react'
import { hangleRegister } from 'src/database/action'
import './register.css'
const RegisterPage = () => {
  return (
    <div className=' border mx-auto border-black  sm:w-1/2 w-5/6 py-20 '>

    <form className='form-container' action={hangleRegister}>
    <h1 className='text-2xl font-bold'>Register User</h1>
    <input type="text" placeholder="Username" name="name" />
    <input type="email" placeholder="Email" name="email" />
    <input type="password" placeholder="Password" name="password" />
    <input
      type="password"
      placeholder="Password again"
      name="passwordRepeat"
      />
    <input type="text" placeholder="ImageUrl" name="imgUrl" />

    <button className='bg-blue-950 w-full text-white py-2'>Register</button>
    <Link href="/login">
      Have an account? <b>Login</b>
    </Link>
  </form>
      </div>
  )
}

export default RegisterPage