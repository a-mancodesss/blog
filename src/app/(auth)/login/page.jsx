import React from 'react'
import { handleGithubLogin } from 'src/database/action'

const LoginPage = async() => {
  return (
    <form action={handleGithubLogin} className='flex justify-center' >
    <button type='submit' className='bg-black text-white px-4 py-2' >SignIn with Github</button>
  </form>
  )
}

export default LoginPage