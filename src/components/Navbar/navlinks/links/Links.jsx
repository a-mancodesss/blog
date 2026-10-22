"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { handleLogout } from "@/database/action"

const Links = ({ nav, session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const pathname = usePathname();
  const toggleDiv = () => {
    setHasOpened(true);
    setIsOpen((prevState) => !prevState);
  };

  const navLinkClass = (path) => `px-4 py-2 rounded-full transition-all duration-300 ${pathname === path ? "bg-accent-soft text-accent" : "text-ink/80 hover:bg-ink/[0.04] hover:text-ink"}`;
  const mobileLinkClass = (path) => `text-xl px-6 py-2 rounded-xl transition-all duration-300 w-full text-center ${pathname === path ? "bg-accent-soft text-accent" : "text-ink/80 hover:bg-ink/[0.04] hover:text-ink"}`;
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
     
        <div className="flex gap-3 ml-4 items-center pl-4 border-l border-line">
          {session?.user ? (           
              <form action={handleLogout}>
                <button className={`${authBtnClass} border border-line bg-transparent text-ink hover:bg-ink/[0.04]`}>Logout</button>
              </form> 
          ) : (
            <Link href="/login" className={`${authBtnClass} text-ink hover:text-accent`}>Login</Link>
          )}
          {!session?.user && (
            <Link href="/register" className={`${authBtnClass} bg-ink hover:bg-accent text-white`}>
              Register
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Toggle */} 
      <button 
        className="fixed top-5 right-6 z-50 sm:hidden p-2 rounded-full bg-paper/90 backdrop-blur-md border border-line text-ink transition-transform active:scale-90" 
        onClick={toggleDiv}
      > 
         {!isOpen ? <Menu size={24} /> : <X size={24} />}
      </button>

      {/* Mobile Navigation Tray (mounted only after first open to keep the
          initial page paint light) */}
      {(hasOpened || isOpen) && (
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 top-0 h-screen bg-paper z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 [transition-timing-function:cubic-bezier(0.32,0.72,0,1)] ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >
        
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
          
          <div className="h-px bg-line w-full my-4"></div>
          
          {session?.user ? (
            <form action={handleLogout} className="w-full">  
              <button className="w-full px-6 py-3 rounded-xl border border-line bg-transparent text-ink font-medium transition-all hover:bg-ink/[0.04]">Logout</button>  
            </form> 
          ) : (  
            <Link href="/login" className="w-full text-center px-6 py-3 rounded-xl text-ink/80 hover:bg-ink/[0.04] hover:text-ink transition-all" onClick={toggleDiv}>Login</Link>
          )}
          
          {!session?.user && (
            <Link href="/register" className="w-full text-center px-6 py-3 rounded-xl bg-ink hover:bg-accent text-white font-medium transition-all" onClick={toggleDiv}>
              Register
            </Link>
          )}
        </div>
      </div>
      )}
    </div>
  );
};

export default Links;
