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
      <body className="font-sans bg-paper text-ink antialiased">
      <div className="wrapper flex flex-col min-h-dvh relative overflow-x-hidden">
        <Navbar/>
        <main className="flex-1 pt-[5rem] w-full max-w-[100vw]">
          {children}
        </main>
      </div>
      </body>
    </html>
  );
}
