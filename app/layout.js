import Image from "next/image";
import "./globals.css";
import Navigation from "@/components/Navigation";
import gradientDecor from "@/app/assets/linear-gradient-hero.png";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-full min-h-screen max-w-screen overflow-x-hidden">
        <Navigation />
        <Image
          alt="gradient decor"
          id="gradientDecor"
          src={gradientDecor}
          className="absolute top-[50px] md:top-0 left-0 right-0 lg:h-[500px] mx-auto w-full -z-10"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
