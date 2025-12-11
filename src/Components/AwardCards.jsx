/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: AwardCards.jsx (ProjectCards.jsx modified)
   Version: III
   Creation: 02/06/2023
   Last modification: 12/10/2024 (Jenny Spicer)
*/

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { awards } from "../Constants/constants";
import { useState } from "react";

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
    placement,
    award,
    description,
    image,
    date,
    // source_code_link,// Not needed for now -- all current awards are listed as projects in projects section
    demo_link,
    media_link,
	powerpoint,
    demo_video,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
  return (
	// TODO: make description less of a big blob? with expandable/collapsible text
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
            ariants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
			{/* Image Section */}
              <div className="relative">
                  <img
                      src={image}
                      alt={name}
                      className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
                  />
                  {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                      <div
                          onClick={() => window.open(source_code_link, "_blank")}
                          className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                      >
                          <img
                              src={githubIcon}
                              alt="github"
                              className="w-full h-full object-contain"
                          />
                      </div>
                  </div> */}
              </div>
				{/* Content Section */}
              <div className="mt-3 flex-grow">
                  <h3 className="text-white font-bold text-2xl">{name}</h3>
                  <h4 className="text-white font-bold text-1xl">🗓️ {date}</h4>
                  <h4 className="text-white font-bold text-1xl">{placement}: {award}</h4>
                  <p className="mt-2 text-secondary text-[14px] leading-snug">
                      {description}
                  </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1"></div>
              <div className="mt-3 flex flex-wrap justify-center items-center gap-2">
					{/* BUTTONS w/ Conditional Rendering for fields: */}
					{media_link && <div className="mt-0 flex">
						<a
							className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
							href={media_link}
							target="_blank"
							rel="noopener noreferrer"
						>
							Award in Media
						</a>
					</div>}
					{demo_link && <div className="mt-0 flex">
						<a
							className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
							href={demo_link}
							target="_blank"
							rel="noopener noreferrer"
						>
							Interactive Demo
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
					{demo_video && <div className="mt-0 flex">
						<a
							className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
							href={demo_video}
							target="_blank"
							rel="noopener noreferrer"
						>
							Demo Video
						</a>
					</div>}
				</div>
          </motion.div>
      </Tilt>
  );
};

const WorksAwarded = () => {
    return (
        <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
            {awards.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
        </div>
    );
};

export default WorksAwarded;