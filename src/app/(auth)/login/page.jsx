import Link from 'next/link'
import './credential-login.css'
import { handleCredentialLogin } from '@/database/action'

const LoginPage = async() => {
  return (
    <div className=''>
  {/* credential login form */}
  <div className=" border mx-auto border-black  sm:w-1/2 w-5/6 py-20">

  <form action={handleCredentialLogin} className='form-container' >
  <h1 className='text-2xl font-bold'>User Login</h1>
    <input type="email" placeholder="Email" name="email" />
    <input type="password" placeholder="Password" name="password" />
   
    <button className="mt-4 mx-auto w-[150px] text-white border-2 rounded-full border-orange-500 hover:bg-orange-500 py-2" >Login</button>
    <Link href="/register">
      Don&apos;t have an account? <u>Register</u>
    </Link>
  </form>
  </div>
    </div>

  )
}

export default LoginPage