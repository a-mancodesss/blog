"use client";
// import adminStore from "src/store/adminstore";
import { Menu, X } from "lucide-react";
import "./links.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {  useState } from "react";
import { handleLogout } from "@/database/action"

const Links = ({ nav,session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleDiv = () => {
    setIsOpen((prevState) => !prevState);
  };
  //re-rendering everytime session changes
  // useEffect(()=>{
  //   console.log('session changed')
  // },[session])
const username  = session?.user?.name

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
            <form action={handleLogout}>
            <button>Logout</button>
            </form> ) 
            : 
            (
          <Link href="/login">Login</Link>
        )}
           {!session?.user&&<Link href="/register">Register</Link>}

      </div>
      </div>
     
      

      {/* for smaller screens */} 
      <button className="fixed top-4  z-20 sm:hidden  right-6" onClick={toggleDiv}> 
         {!isOpen ? <Menu size={24} /> : <X size={24} />}
         </button>


      <div className="nav-tray wrapper text-xl">
              <div className={`fixed-div ${isOpen ? "open" : "closed"}`}>
                {nav.map((n) => (
                  <Link
                    className={`${pathname === n.path && "isActive"} `}
                    key={n.title}
                    href={n.path}
                  >
                    {n.title}
                  </Link>
                ))}
        {session?.user ? (<form action={handleLogout}>  <button>Logout</button>  </form> )  :   (  <Link href="/login">Login</Link>)}
        {!session?.user&&<Link href="/register">Register</Link>}

              </div>
      </div>
      {isOpen && (
        <div
       className="overlay"
       onClick={toggleDiv} // Close the tray when overlay is clicked
    />
  )}


     {/* the end  */}
    </div>
  );
};

export default Links;