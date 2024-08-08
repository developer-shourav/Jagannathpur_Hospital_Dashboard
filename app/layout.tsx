import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MenuLarge from "./components/Home/Menu/MenuLarge";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jagannathpur Hospital ERP",
  description: "Complete Accounting Solution for Your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* -----------Web  Container with max width----------- */}
        <main className="max-w-[1300px] mx-auto">
          {/* ---------main section------- */}
          <div className="flex justify-center ">
            {/* ---------Menu For Large Devices------- */}
            <MenuLarge />

            {/* ----------Main Content--------------- */}
            <div className="w-[80%] bg-[#F6F6F6]" >{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
