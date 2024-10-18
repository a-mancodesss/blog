"use client";
// import adminStore from "src/store/adminstore";
import { Menu, X } from "lucide-react";
import "./links.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {  useState } from "react";
import { handleLogout } from "src/database/action";

const Links = ({ nav,session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  //re-rendering everytime session changes
  // useEffect(()=>{
  //   console.log('session changed')
  // },[session])
console.log(session)

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

        {session?.user ? (
          <> 
            {session.user?.isAdmin && <Link href="/admin">Admin</Link>} 
            <form action={handleLogout}>

            <button>Logout</button>
            </form>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
      </div>
     
      

      {/* for smaller screens */} 
      <button className="fixed top-4  z-20 sm:hidden  right-6" onClick={()=>setIsOpen(!isOpen) }> 
         {!isOpen ? <Menu size={24} /> : <X size={24} />}
         </button>
      <div className=" wrapper text-xl">
      {isOpen && 
              <div className=" fixed bg-slate-900 right-0 top-0 w-3/5 flex flex-col  gap-8  justify-center items-center min-h-[104.44vh]">
                {nav.map((n) => (
                  <Link
                    className={`${pathname === n.path && "isActive"} `}
                    key={n.title}
                    href={n.path}
                  >
                    {n.title}
                  </Link>
                ))}

                  {session?.user ? (
                            <>
                              {session.user?.isAdmin && <Link href="/admin">Admin</Link>}
                              <form action={handleLogout}>

                              <button>Logout</button>
                              </form>
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