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
        {/* Global ambient background. A radial gradient paints far cheaper than
            two fixed, 100px-blurred elements on every scroll. */}
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-50 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(520px circle at 0% 0%, rgba(59,130,246,0.12), transparent 70%), radial-gradient(520px circle at 100% 100%, rgba(249,115,22,0.12), transparent 70%)",
          }}
        />
        
        <Navbar/>
        <main className="flex-1 pt-[5rem] w-full max-w-[100vw]">
          {children}
        </main>
      </div>
      </body>
    </html>
  );
}
