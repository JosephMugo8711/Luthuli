import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/navbar";
import Footer from "./components/footer/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Luthuli Phones",
  description: "An ecommerce site for selling and buying products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
  
      </body>
    </html>
  );
}
