import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const fontpoppin = Poppins 
({
     weight: ['100','200','300','400','500','600','700','800','900'],
     subsets: ["latin"],
   });

   export const metadata: Metadata = {
  title: "Travel For You",
  description: "Travel to your next destination",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontpoppin.className} antialiased`}>
        <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
