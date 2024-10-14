import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: {
    default:"Aman BlogApp Homepage",
    template:"%s | Aman BlogApp"
  },
  description: "BlogApp by Aman made using NextJs",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className={`font-sans`} > 
      <div className="wrapper flex flex-col justify-between min-h-screen bg-blue-50">

      <Navbar/>
      <div className="px-4 sm:px-14 ">
        {children}
      </div>
        <Footer/>
      </div>
      </body>
    </html>
  );
}
