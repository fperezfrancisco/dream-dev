"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const PortfolioPreviewCard = ({ project, setModal, setProject }) => {
  const handlePreview = () => {
    if (project.liveSite) {
      window.open(project.liveSite, "_blank");
    } else {
      setProject(project);
      setModal(true);
    }
  };

  return (
    <div
      onClick={handlePreview}
      className="bg-primary aspect-[3/2] flex flex-col items-center p-2 rounded-2xl min-w-[250px] max-w-[350px] grow cursor-pointer hover:scale-105 transition-all ease-out duration-300"
    >
      <div className="w-full aspect-[3/2] bg-neutral-100 rounded-xl overflow-hidden object-cover">
        <Image alt="thumbnail image" src={project?.thumbnail} />
      </div>
      <p className="text-white mt-2">
        {project?.title ? project.title : "No project name"}
      </p>
    </div>
  );
};

export default PortfolioPreviewCard;
