import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";

export default async function Home() {
  return (
    <div className="h-[calc(100vh-5rem)]  flex flex-col justify-between relative overflow-hidden w-full">
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Main Content Centered */}
      <div className="flex-1 flex flex-col justify-center items-center gap-6 sm:gap-10 px-4 min-h-0">
        
        {/* Image Container - optimized size for single page fit */}
        <div className="relative group shrink-0">
          <div className="relative w-[14rem] h-[14rem] sm:w-[20rem] sm:h-[20rem] rounded-full p-2 bg-gradient-to-b from-white/20 to-transparent backdrop-blur-sm border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
             {/* Floating elements */}
            <div className="absolute z-10 top-4 left-4 w-5 h-5 bg-gradient-to-br from-orange-500 to-orange-300 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)] animate-bounce delay-100"></div>
            <div className="absolute z-10 top-12 right-0 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-pulse"></div>
            <div className="absolute z-10 bottom-12 -left-2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
            
            <div className="w-full h-full relative rounded-full overflow-hidden border-4 border-slate-900/50">
               <Image fill src={'/landing.jpeg'} alt="Aman Image" className="object-cover transition-transform duration-700 group-hover:scale-110"/>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center gap-y-6 max-w-2xl text-center z-10 shrink-0">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 pb-1">
              Welcome to <span className="text-orange-500">AmanLog</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
              Discover stories, thinking, and expertise from writers on any topic.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/createPost">
              <button className="w-[160px] bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:-translate-y-1 active:translate-y-0" >
                Create Post
              </button>
            </Link>
            <Link href="/blog">
              <button className="w-[160px] text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 active:translate-y-0" >
                Browse Blogs
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="shrink-0">
        <Footer/>
      </div>

    </div>
  );
}
