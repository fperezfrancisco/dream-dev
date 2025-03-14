import Image from "next/image";
import React from "react";
import ddsLogoBig from "@/app/assets/dds-logo-main.png";

const Footer = () => {
  return (
    <footer className="w-full p-8 py-[6px] h-full min-h-[400px] flex flex-col gap-6 items-center justify-center bg-primary text-white">
      <Image
        alt="Dream Dev Solutions Logo Big"
        src={ddsLogoBig}
        className="w-[250px] md:w-[350px] h-auto"
      />
      <div className="text-sm">2025 Dream Dev Solutions LLC</div>
    </footer>
  );
};

export default Footer;
