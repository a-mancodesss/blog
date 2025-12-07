import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

export const metadata = {
  tags:['all'],
  title: {
    default:"Aman BlogApp Homepage",
    template:"%s | Aman BlogApp"
  },
  description: "BlogApp by Aman made using NextJs",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans bg-slate-950 text-white selection:bg-orange-500/30 selection:text-orange-200 antialiased`}> 
      <div className="wrapper flex flex-col min-h-dvh relative overflow-x-hidden">
        {/* Global ambient background light */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-50 pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
        </div>
        
        <Navbar/>
        <main className="flex-1 pt-[5rem] w-full max-w-[100vw]">
          {children}
        </main>
      </div>
      </body>
    </html>
  );
}
