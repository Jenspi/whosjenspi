/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: BlogCards.jsx (ProjectCards.jsx copy)
   Version: I
   Creation: 02/06/2023
   Last modification: 12/19/2025 (Jenny Spicer)
*/

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { blog } from "../Constants/constants.js";
import { githubIcon } from "../assets/index.js";
import { useState } from "react";
import { ReadMore } from "./ReadMore.jsx";

export const staggerContainer = (staggerChildren, delayChildren) => {
	return {
		hidden: {},
		show: {
			transition: {
				staggerChildren: staggerChildren,
				delayChildren: delayChildren || 0,
			},
		},
	};
};

export const textVariant = (delay) => {
	return {
		hidden: {
			y: -50,
			opacity: 0,
		},
		show: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				duration: 1.25,
				delay: delay,
			},
		},
	};
};

export const fadeIn = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
			y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
			opacity: 0,
		},
		show: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const zoomIn = (delay, duration) => {
	return {
		hidden: {
			scale: 0,
			opacity: 0,
		},
		show: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "tween",
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

export const slideIn = (direction, type, delay, duration) => {
	return {
		hidden: {
			x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
			y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
		},
		show: {
			x: 0,
			y: 0,
			transition: {
				type: type,
				delay: delay,
				duration: duration,
				ease: "easeOut",
			},
		},
	};
};

const ProjectCard = ({
  index,
  name,
  description,
  image,
  date,
//   source_code_link,
  media_link,
  game_journal_link,
  blog_type,
  powerpoint,
  written_paper_link,
}) => {
	// const [isExpanded, setIsExpanded] = useState(false);
  return (
      <Tilt
          options={{
              max: 40,
              scale: 1,
              speed: 450,
          }}
          className="shadow-2xl p-5 rounded-lg sm:w-[300px] w-[100%]"
      >
          <motion.div
		  	className="h-full flex flex-col"
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
			{/* Image Section */}
              <div className="relative">
                  <img
                      src={image}
                      alt={name}
                      className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
                  />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                      {/* {source_code_link && <div
                          onClick={() => window.open(source_code_link, "_blank")}
                          className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                      >
                          <img
                              src={githubIcon}
                              alt="github"
                              className="w-full h-full object-contain"
                          />
                      </div>} */}
                  </div>
              </div>
				{/* Content Section */}
              <div className="mt-3 flex-grow">
                  <h3 className="text-white font-bold text-2xl">{name}</h3>
				  {/* Allow for "read more" button if line exceeds 25 words (defined by src/Components/ReadMore.jsx) */}
                  <h4 className="text-white font-bold italic text-1xl">{blog_type}</h4>
				  <div className="mt-2 text-secondary text-[14px] leading-snug">
						<ReadMore id="read-more-text" text={description} />
					</div>
              </div>
              <div className="mt-2 flex flex-wrap gap-1"></div>
              <div className="mt-1 flex flex-wrap justify-center items-center gap-2">
					{/* BUTTONS w/ Conditional Rendering for fields: */}
					{game_journal_link && <div className="mt-0 flex">
						<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={game_journal_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Game Journal
					</a>
					</div>}
					{media_link && <div className="mt-0 flex">
						<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={media_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Project in Media
					</a>
					</div>}
					{powerpoint && <div className="mt-0 flex">
						<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={powerpoint}
						target="_blank"
						rel="noopener noreferrer"
					>
						PowerPoint
					</a>
					</div>}
					{written_paper_link && <div className="mt-0 flex">
						<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={written_paper_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Written Paper
					</a>
					</div>}
              </div>
          </motion.div>
      </Tilt>
  );
};

const Writings = () => {
    return (
        <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
            {blog.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
        </div>
    );
};

export default Writings;