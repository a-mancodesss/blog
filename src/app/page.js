import Image from "next/image";
import Link from "next/link";


export default async  function Home() {
  return (
    <div>
     
      <div className="imagecontainer border-2 border-black rounded-full relative w-[20rem] h-[20rem] sm:w-[30rem] sm:h-[30rem] mx-auto my-8 border-opacity-20 overflow-visible">
        <div className="absolute z-1 top-0 left-0 w-4 h-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full"></div>
        <div className="absolute z-1 top-0 right-0 w-4 h-4 bg-blue-500 rounded-full"></div>
        <div className="absolute z-1 -top-[20%] right-[50%] w-4 h-4 bg-red-500 rounded-full"></div>
        <Image fill src={'/landing.jpeg'} alt="Aman Image" className="rounded-full object-cover"/>
      </div>
      <div className="sm:mt-18 flex flex-col items-center gap-y-4  ">
        <div className="text-center text-2xl font-bold mb-4">Welcome to my BlogApp!</div>
        <Link href="/createPost">
        <button className="mx-auto w-[150px] bg-slate-900 text-white px-4 py-2" >Create Post</button>
        </Link>
        <Link href="/blog">
        <button className="mx-auto w-[150px] text-slate-900 border-2 border-slate-900 px-4 py-2" >Browse Blogs</button>
        </Link>
        <div>
      </div>
      </div>
    </div>
  );
}
