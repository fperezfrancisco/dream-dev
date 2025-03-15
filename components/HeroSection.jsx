"use client";
import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import cloud from "@/app/assets/cloud-illustration.png";
import heart from "@/app/assets/heart-illustration.png";
import trending from "@/app/assets/trending-illustration.png";
import { motion } from "motion/react";
import { easeOut } from "motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div
      id="heroSection"
      className="relative w-full h-full min-h-[675px] sm:min-h-[600px] lg:min-h-[850px] py-10 sm:py-12 md:py-[64px] lg:py-[120px] px-4 md:px-8 lg:px-12 flex flex-col items-start sm:items-center justify-center"
    >
      {/** <div className="absolute left-0 right-0 mx-auto h-full w-1 bg-black"></div>*/}

      <div className="relative w-full sm:max-w-[600px] items-start text-left md:items-center md:text-center lg:max-w-[1200px] md:mt-6 flex flex-col  text-white">
        <motion.div
          initial={{ opacity: 0, scale: 1, translateY: 100 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          viewport={{ once: true }} // Only runs once when in view
          transition={{
            duration: 0.5,
            ease: easeOut,
          }}
        >
          <h1 className="text-5xl lg:text-[64px] xlTightLetters font-bold">
            Build a Powerful Online Presence
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1, translateY: 100 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          viewport={{ once: true }} // Only runs once when in view
          transition={{
            delay: 0.15,
            duration: 0.5,
            ease: easeOut,
          }}
        >
          <p className="text-md md:text-xl lg:text-2xl mt-4 w-full max-w-[80%] md:max-w-[800px] mb-12">
            Crafting fast, modern, and conversion-driven websites for small
            businesses and entrepreneurs.
          </p>
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 1, translateY: 100 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          viewport={{ once: true }} // Only runs once when in view
          transition={{
            delay: 0.25,
            duration: 0.45,
            ease: easeOut,
          }}
        >
          <Link href={"#contact"}>
            <Button widthFull={true} primary={true} title={"GET A QUOTE"} />
          </Link>
        </motion.div>

        <div className="scale-75 sm:scale-100 absolute -left-20 mx-0 -top-[108px] sm:-left-6 sm:-top-[132px] md:left-0 md:right-0 md:mx-auto md:-top-[160px] lg:-top-[240px] flex items-start w-fill sm:w-fit md:items-center sm:gap-0 md:gap-2">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }} // Only runs once when in view
            transition={{
              delay: 0.75, // 1 second delay
              type: "spring",
              stiffness: 180, // Increased for a snappier pop
              damping: 8, // Reduced for quicker bounce back
            }}
          >
            <Image
              src={heart}
              className="size-[120px] md:size-[160px] lg:size-[200px] scale-85 translate-y-8 translate-x-8"
              alt="heart"
              width={100}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }} // Only runs once when in view
            transition={{
              delay: 0.5, // 1 second delay
              type: "spring",
              stiffness: 180, // Increased for a snappier pop
              damping: 8, // Reduced for quicker bounce back
            }}
          >
            <Image
              src={cloud}
              className="size-[120px] md:size-[160px] lg:size-[240px]"
              alt="cloud icon"
              width={300}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }} // Only runs once when in view
            transition={{
              delay: 0.85, // 1 second delay
              type: "spring",
              stiffness: 180, // Increased for a snappier pop
              damping: 8, // Reduced for quicker bounce back
            }}
          >
            <Image
              src={trending}
              className="size-[120px] md:size-[160px] lg:size-[200px] translate-y-6 -translate-x-6"
              alt="cloud icon"
              width={200}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
