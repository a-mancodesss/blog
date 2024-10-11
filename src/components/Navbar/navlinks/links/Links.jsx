"use client";
import { Menu, X } from "lucide-react";
import "./links.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Links = ({ nav }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  //temporray
  let sesssion = true;
  let isAdmin = true;
  return (
    <div className="z-10  ">
      {/*for large screens */}
      <div>
      <div className={`forLarge sm:flex gap-4 hidden`}>
        {nav.map((n) => (
          <Link
            className={`${pathname === n.path && "isActive"}`}
            key={n.title}
            href={n.path}
          >
            {n.title}
          </Link>
        ))}

        {sesssion ? (
          <>
            {isAdmin && <Link href="/admin">Admin</Link>}
            <button>Logout</button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
      </div>
     
      

      {/* for smaller screens */} 
      <button className=" sm:hidden  right-0 bg-black text-white p-1 rounded-md " onClick={()=>setIsOpen(!isOpen) }> 
         {!isOpen ? <Menu size={24} /> : <X size={24} />}
         </button>
      <div className=" wrapper text-xl">
      {isOpen && 
              <div className=" absolute -z-10 bg-slate-900 right-0 w-3/5 flex flex-col  gap-8  justify-center items-center h-[calc(100vh-3rem)]">
                {nav.map((n) => (
                  <Link
                    className={`${pathname === n.path && "isActive"} `}
                    key={n.title}
                    href={n.path}
                  >
                    {n.title}
                  </Link>
                ))}

                  {sesssion ? (
                            <>
                              {isAdmin && <Link href="/admin">Admin</Link>}
                              <button>Logout</button>
                            </>
                          ) : (
                            <Link href="/login">Login</Link>
                          )}
              </div>}
      </div>


     {/* the end  */}
    </div>
  );
};

export default Links;
