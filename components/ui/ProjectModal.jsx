"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { IoClose } from "react-icons/io5";

const ProjectModal = ({ modalOpen, setModal, project }) => {
  return (
    <div className="w-[100%] h-[100%] fixed z-40 m-auto top-0 bottom-0 left-0 right-0 bg-black/60">
      <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-[80%] h-fit min-h-[50%] max-h-[90%] lg:h-[80%] lg:max-h-none bg-black p-4 sm:py-8 sm:px-10 overflow-y-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent">
        <IoClose
          className="size-[48px] absolute top-8 right-8 z-50 text-white cursor-pointer"
          onClick={() => setModal(false)}
        />
        <div className="w-full h-full">
          <Image
            alt="project image"
            src={project.preview ? project.preview : project.thumbnail}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
