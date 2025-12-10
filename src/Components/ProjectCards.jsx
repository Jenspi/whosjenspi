/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: ProjectCards.jsx
   Version: III
   Creation: 02/06/2023
   Last modification: 12/10/2025 (Jenny Spicer)
*/

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../Constants/constants";
import { githubIcon } from "../assets";

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
  stack,
  source_code_link,
  demo_link,
  demo_video,
  media_link,
  digital_prototype,
}) => {
  return (
	// TODO: align text to vertical center of buttons; 
	// TODO: test different button gap sizes between buttons (how does it look with 1 vs 2 vs 3 v 4 buttons?)
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
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
              <div className="relative">
                  <img
                      src={image}
                      alt={name}
                      className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
                  />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
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
                  </div>
              </div>

              <div className="mt-3">
                  <h3 className="text-white font-bold text-2xl">{name}</h3>
                  <h5 className="text-white font-bold text-1xl italic">{stack}</h5>
                  <p className="mt-2 text-secondary text-[14px] leading-snug">
                      {description}
                  </p>
              </div>
              <div className="mt-2 flex flex-wrap gap-1"></div>
              <div className="mt-3 flex flex-wrap justify-center items-center">
					{/* Conditional Rendering for fields: */}
					{demo_link && <div className="mt-3 flex">
						<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={demo_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Interactive Demo
					</a>
					</div>}
					{digital_prototype && <div className="mt-3 flex">
						<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={digital_prototype}
						target="_blank"
						rel="noopener noreferrer"
					>
						Digital Prototype
					</a>
					</div>}
					{demo_video && <div className="mt-3 flex">
						<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={demo_video}
						target="_blank"
						rel="noopener noreferrer"
					>
						Demo Video
					</a>
					</div>}
					{media_link && <div className="mt-3 flex">
						<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={media_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Project in Media
					</a>
					</div>}
              </div>
          </motion.div>
      </Tilt>
  );
};

const Works = () => {
    return (
        <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
            {projects.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
        </div>
    );
};

export default Works;