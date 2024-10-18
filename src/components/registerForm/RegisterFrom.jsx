
import Link from 'next/link'

import { handleRegister } from 'src/database/action';
const RegisterForm = () => {
  
  // const [state, formAction] = useActionState(handleRegister, undefined); //didn't work as its R19 experimental feature it says.
  // useEffect(() => {state?.success && router.push('/login')},[state?.success,router])
  return (
    <div className=' border mx-auto border-black  sm:w-1/2 w-5/6 py-20 '>

    <form className='form-container' action={handleRegister}>
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
    {/* {state?.error && <p>{state.error}</p>} */}
    <Link href="/login">
      Have an account? <b>Login</b>
    </Link>
  </form>
      </div>
)
}

export default RegisterForm