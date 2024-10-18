import './credential-login.css'
import { handleCredentialLogin, handleGithubLogin } from 'src/database/action'

const LoginPage = async() => {
  return (
    <div className=''>
    {/* github login form  */}
    <form action={handleGithubLogin} className='flex justify-center' >
    <button type='submit' className='bg-black text-white px-4 py-2' >GH signIn</button>
  </form>

  {/* credential login form */}
  <div className=" border mx-auto border-black  sm:w-1/2 w-5/6 py-20">

  <form action={handleCredentialLogin} className='form-container' >
  <h1 className='text-2xl font-bold'>Login Using Credential</h1>

  <input type="text" placeholder="Username" name="name" />
    <input type="email" placeholder="Email" name="email" />
    <input type="password" placeholder="Password" name="password" />
   
    <button className='bg-blue-950 w-full text-white py-2'>Login with Cred</button>
  </form>
  </div>
    </div>

  )
}

export default LoginPage