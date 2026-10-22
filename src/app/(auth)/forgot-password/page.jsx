import React from 'react'
import Link from 'next/link'

const ForgotPassword = () => {
  return (
    <div className='flex justify-center items-center py-10 min-h-[calc(100vh-200px)] relative overflow-hidden'>
      <div className="w-full max-w-md bg-surface p-8 rounded-xl shadow-sm border border-line relative z-10">
        <h1 className="text-3xl font-semibold mb-2 text-center text-ink">Reset Password</h1>
        <p className="text-ink text-center mb-8 text-sm">Enter your email address to receive reset instructions.</p>
        
        <form className="flex flex-col gap-6">
          
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

          <button 
            type="submit" 
            className="mt-2 w-full bg-ink hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Send Reset Link
          </button>
          
          <div className="text-center mt-4 text-ink text-sm">
            Remember your password?{' '}
            <Link href="/login" className="text-accent hover:text-accent-hover font-semibold hover:underline transition-colors">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
