'use client'
import Link from 'next/link'
import { handleRegister } from '@/database/action';
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
    <div className='flex justify-center items-center py-10 min-h-[calc(100vh-200px)] relative overflow-hidden'>
       {/* Ambient Background */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <Toaster/>
      <div className="w-full max-w-md bg-slate-900/50 backdrop-blur-md p-8 rounded-xl shadow-2xl border border-white/10 relative z-10">
        <h1 className="text-3xl font-bold mb-2 text-center text-white">Create Account</h1>
        <p className="text-slate-400 text-center mb-8 text-sm">Join our community today.</p>
        
        <form className="flex flex-col gap-5" action={onSubmit}>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-slate-400 text-xs uppercase tracking-wider font-semibold ml-1">Username</label>
            <input 
              type="text" 
              name="name" 
              id="name"
              placeholder="Choose a username" 
              className="w-full bg-slate-950/50 text-white p-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition duration-200 placeholder:text-slate-600"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-slate-400 text-xs uppercase tracking-wider font-semibold ml-1">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email"
              placeholder="Enter your email" 
              className="w-full bg-slate-950/50 text-white p-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition duration-200 placeholder:text-slate-600"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-slate-400 text-xs uppercase tracking-wider font-semibold ml-1">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password"
              placeholder="Create a password" 
              className="w-full bg-slate-950/50 text-white p-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition duration-200 placeholder:text-slate-600"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="passwordRepeat" className="text-slate-400 text-xs uppercase tracking-wider font-semibold ml-1">Confirm Password</label>
            <input 
              type="password" 
              name="passwordRepeat" 
              id="passwordRepeat"
              placeholder="Confirm your password" 
              className="w-full bg-slate-950/50 text-white p-3 rounded-lg border border-slate-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition duration-200 placeholder:text-slate-600"
              required
            />
          </div>

          <button 
            type="submit" 
            className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-[1.01] active:scale-[0.99] shadow-lg hover:shadow-orange-500/20"
          >
            Register
          </button>

          <div className="text-center mt-4 text-slate-400 text-sm">
            Have an account?{' '}
            <Link href="/login" className="text-orange-500 hover:text-orange-400 font-semibold hover:underline transition-colors">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
