import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <main className="max-w-[1260px] mx-auto">
          {/* ---------main section------- */}
          <div className="flex ">

            {/* ---------Menu For Large Devices------- */}
            <aside>
              <div>
                
              </div>
              <ul>
                <li></li>
              </ul>
            </aside>


            {/* ----------Main Content--------------- */}
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
