import Image from "next/image";
import "./globals.css";
import Navigation from "@/components/Navigation";
import gradientDecor from "@/public/linear-gradient-hero.png";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Dream Dev Solutions | Custom Website Design & Development for Small Businesses ",
  description:
    "Dream Dev Solutions creates custom, responsive websites for small businesses. Get a professional, easy-to-navigate website that drives results and boosts your online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="small business website design, custom website development, responsive websites, professional websites for small businesses, web design services, affordable web development, website solutions for entrepreneurs"
        />
      </head>
      <body className="w-full h-full min-h-screen max-w-screen overflow-x-hidden">
        <Navigation />
        <Image
          alt="gradient decor"
          id="gradientDecor"
          src={gradientDecor}
          className="absolute top-[50px] md:top-0 left-0 right-0 lg:h-[500px] mx-auto w-full -z-10"
          width={250}
        />

        {children}
        <Footer />
      </body>
    </html>
  );
}
