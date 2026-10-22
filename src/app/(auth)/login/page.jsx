'use client'
import Link from 'next/link'
import { handleCredentialLogin } from '@/database/action'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const router = useRouter()
    const onSubmit =async(formData)=>{
      const res = await handleCredentialLogin(formData)
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success(res.success)
        setTimeout(() => router.push("/blog"), 1000)
      }
      }  
  
  return (
    <div className='flex justify-center items-center py-10 min-h-[calc(100vh-200px)] relative overflow-hidden'>
      <Toaster/>
      <div className="w-full max-w-md bg-surface p-8 rounded-xl shadow-sm border border-line relative z-10">
        <h1 className="font-display text-3xl font-semibold mb-2 text-center text-ink">Welcome Back</h1>
        <p className="text-ink text-center mb-8 text-sm">Please enter your details to sign in.</p>
        
        <form action={onSubmit} className="flex flex-col gap-5">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-ink text-xs uppercase tracking-wider font-semibold ml-1">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Enter your email" 
              className="w-full bg-white text-ink p-3 rounded-lg border border-line focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition duration-200 placeholder:text-muted/60"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-ink text-xs uppercase tracking-wider font-semibold ml-1">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              placeholder="Enter your password" 
              className="w-full bg-white text-ink p-3 rounded-lg border border-line focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition duration-200 placeholder:text-muted/60"
              required
            />
            <div className="flex justify-end">
                <Link href="/forgot-password" className="text-xs text-ink/70 hover:text-accent transition-colors">
                    Forgot Password?
                </Link>
            </div>
          </div>

          <button 
            type="submit" 
            className="mt-2 w-full bg-ink hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Login
          </button>
          
          <div className="text-center mt-4 text-ink text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-accent hover:text-accent-hover font-semibold hover:underline transition-colors">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
