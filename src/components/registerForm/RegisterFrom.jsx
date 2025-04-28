'use client'
import Link from 'next/link'

import { handleRegister } from '@/database/action';
import './registerFrom.css'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const RegisterForm = () => {
    const router = useRouter()
    const onSubmit =async(formData)=>{
      const res = await handleRegister(formData)
      if (res.error) {
        toast.error(res.error);
      } else {
        toast.success(res.success)
        setTimeout(() => router.push("/login"), 1000)
      }
      }
  return (
    <div className=' border mx-auto border-black  sm:w-1/2 w-5/6 py-20 '>
      <Toaster/>
    <form className='form-container' action={onSubmit}>
    <h1 className='text-2xl font-bold'>Register User</h1>
    <input type="text" placeholder="Username" name="name" />
    <input type="email" placeholder="Email" name="email" />
    <input type="password" placeholder="Password" name="password" />
    <input
      type="password"
      placeholder="Password again"
      name="passwordRepeat"
      />

    <button className='mt-4 mx-auto w-[150px] text-white border-2 rounded-full border-orange-500 hover:bg-orange-500 py-2'>Register</button>
    {/* {state?.error && <p>{state.error}</p>} */}
    <Link href="/login">
      Have an account? <u>Login</u>
    </Link>
  </form>
      </div>
)
}

export default RegisterForm