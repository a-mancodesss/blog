
import Link from 'next/link'

import { handleRegister } from '@/database/action';
import './registerFrom.css'
const RegisterForm = () => {
  
  // const [state, formAction] = useActionState(handleRegister, undefined); //didn't work as its R19 experimental feature it says.
  // useEffect(() => {state?.success && router.push('/login')},[state?.success,router])
  return (
    <div className=' border mx-auto border-black  sm:w-1/2 w-5/6 py-20 '>

    <form className='form-container' action={handleRegister} method='POST'>
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