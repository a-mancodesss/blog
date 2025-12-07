"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { handleLogout } from "@/database/action"

const Links = ({ nav, session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleDiv = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinkClass = (path) => `px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 ${pathname === path ? "bg-white/10 text-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.3)]" : "text-slate-300 hover:text-white"}`;
  const mobileLinkClass = (path) => `text-xl px-6 py-2 rounded-xl transition-all duration-300 w-full text-center hover:bg-white/10 ${pathname === path ? "bg-white/10 text-orange-400" : "text-slate-300"}`;
  const authBtnClass = "px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";

  return (
    <div className="z-10">
      {/* Desktop Navigation */}
      <div className="hidden sm:flex gap-2 items-center">
        {nav.map((n) => (
          <Link
            className={navLinkClass(n.path)}
            key={n.title}
            href={n.path}
          >
            {n.title}
          </Link>
        ))}
     
        <div className="flex gap-3 ml-4 items-center pl-4 border-l border-white/10">
          {session?.user ? (           
              <form action={handleLogout}>
                <button className={`${authBtnClass} bg-white/10 hover:bg-white/20 text-white border border-white/10`}>Logout</button>
              </form> 
          ) : (
            <Link href="/login" className={`${authBtnClass} text-white hover:text-orange-400`}>Login</Link>
          )}
          {!session?.user && (
            <Link href="/register" className={`${authBtnClass} bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20`}>
              Register
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Toggle */} 
      <button 
        className="fixed top-5 right-6 z-50 sm:hidden p-2 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 text-white transition-transform active:scale-90" 
        onClick={toggleDiv}
      > 
         {!isOpen ? <Menu size={24} /> : <X size={24} />}
      </button>

      {/* Mobile Navigation Tray */}
      <div className={`fixed inset-x-0 top-0 h-screen bg-slate-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
        
        <div className="flex flex-col gap-4 w-full max-w-xs px-6">
          {nav.map((n) => (
            <Link
              className={mobileLinkClass(n.path)}
              key={n.title}
              href={n.path}
              onClick={toggleDiv}
            >
              {n.title}
            </Link>
          ))}
          
          <div className="h-px bg-white/10 w-full my-4"></div>
          
          {session?.user ? (
            <form action={handleLogout} className="w-full">  
              <button className="w-full px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all">Logout</button>  
            </form> 
          ) : (  
            <Link href="/login" className="w-full text-center px-6 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-all" onClick={toggleDiv}>Login</Link>
          )}
          
          {!session?.user && (
            <Link href="/register" className="w-full text-center px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-lg shadow-orange-500/20 transition-all" onClick={toggleDiv}>
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Links;
