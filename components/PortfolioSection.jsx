"use client";
import React, { useEffect, useState } from "react";
import PortfolioPreviewCard from "./ui/PortfolioPreviewCard";
import brewThumbnail from "@/app/assets/brew-thumbnail.png";
import ProjectModal from "./ui/ProjectModal";
import brewPreview from "@/app/assets/brew-haven-mock.png";
import coreThumbnail from "@/app/assets/core-thumbnail.png";
import corePreview from "@/app/assets/core-mock.png";
import trilogyThumbnail from "@/app/assets/trilogy-thumnail.png";

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const PortfolioSection = () => {
  const portfolioList = [
    {
      title: "Brew Haven Coffee",
      thumbnail: brewThumbnail,
      preview: brewPreview,
    },
    {
      title: "Core Strength Fitness",
      thumbnail: coreThumbnail,
      preview: corePreview,
    },
    {
      title: "Trilogy Soccer",
      liveSite: "https://www.trilogysoccer.com",
      thumbnail: trilogyThumbnail,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [project, setProject] = useState();

  const size = useWindowSize();

  return (
    <div
      id="portfolio"
      className="relative w-full h-full py-[64px] md:py-[120px] lg:py-[180px] px-4 md:px-8 lg:px-12 flex flex-col min-[900px]:flex items-start md:items-center md:justify-center overflow-x-clip mb-12 mb:mb-0"
    >
      <div className="w-full max-w-[1440px] text-primary flex flex-col items-center gap-8">
        <div className="flex flex-col tems-center text-center w-full ">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 lg:mb-12">
            Portfolio
          </h2>
        </div>
        <div className="w-full flex flex-wrap gap-6 xl:gap-8 items-center justify-center">
          {size.width &&
            size.width > 1170 &&
            portfolioList.map((project, index) => (
              <PortfolioPreviewCard
                key={index}
                project={project}
                setProject={setProject}
                setModal={setModalOpen}
              />
            ))}

          {size.width > 768 &&
            size.width <= 1170 &&
            portfolioList
              .slice(0, 6)
              .map((project, index) => (
                <PortfolioPreviewCard
                  key={index}
                  project={project}
                  setProject={setProject}
                  setModal={setModalOpen}
                />
              ))}

          {size.width > 0 &&
            size.width <= 768 &&
            portfolioList
              .slice(0, 4)
              .map((project, index) => (
                <PortfolioPreviewCard
                  key={index}
                  project={project}
                  setProject={setProject}
                  setModal={setModalOpen}
                />
              ))}
        </div>
      </div>
      {modalOpen && (
        <ProjectModal
          setModal={setModalOpen}
          modalOpen={modalOpen}
          project={project}
        />
      )}
    </div>
  );
};

export default PortfolioSection;
