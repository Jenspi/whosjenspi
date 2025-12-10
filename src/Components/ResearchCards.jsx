/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: ResearchCards.jsx (ProjectCards.jsx modified)
   Version: III
   Creation: 02/06/2023
   Last modification: 12/10/2024 (Jenny Spicer)
*/

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { research } from "../Constants/constants";

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

// TODO: align text to vertical center of buttons; 
	// TODO: test different button gap sizes between buttons (how does it look with 1 vs 2 vs 3 v 4 buttons?)
	// TODO: formatting of fields (e.g., date placement, advisor name placement) -- do we want all of these? how can i make it less cluttered?
	// TODO: make description less of a big blob? with expandable/collapsible text
const ProjectCard = ({
	index,
	name,
    advised_under,
	self_advised,
    self_directed,
	lab,
    presentation,
    description,
    image,
    date,
	demo_link,
	research_link,
	pitch,
    media_link,
}) => {
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
              <div className="relative">
                  <img
                      src={image}
                      alt={name}
                      className="w-full h-full md:h-[200px] object-cover rounded-lg relative"
                  />
              </div>

              <div className="mt-3 flex-grow">
                  <h3 className="text-white font-bold text-2xl">{name}</h3>
                  <h4 className="text-white font-bold text-1xl">🗓️ {date}</h4>
					{advised_under && <h4 className="text-white text-1xl flex gap-1">
						<span>🔍</span>
						<span><b>Advisor:</b> {advised_under}</span>
					</h4>}
					{self_advised ? 
						<h4 className="text-white text-1xl flex gap-1">
							<span>🔍</span>
							<span><b>Self-Advised</b></span>
						</h4>
						: null
					}
					{self_directed ? 
						<h4 className="text-white text-1xl flex gap-1">
							<span>🗂️</span>
							<span><b>Self-Directed</b></span>
						</h4>
						: null
					}
				  {lab && <h4 className="text-white text-1xl flex gap-1">
						<span>🔬</span>
						<span><i>{lab}</i></span>
					</h4>}
                  <p className="mt-2 text-secondary text-[14px] leading-snug">
                      {description}
                  </p>{/* Can I make the project description a dropdown if it exceeds something like 6 lines? https://medium.com/@filipepfluckdev/creating-a-read-more-component-in-react-4afd1d17d40b */}
              </div>
              <div className="mt-2 flex flex-wrap gap-1"></div>
			  <div className="mt-3 flex flex-wrap justify-center items-center gap-2">
				{/* Conditional Rendering for fields: */}
				{pitch && <div className="mt-0 flex">
					<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={pitch}
						target="_blank"
						rel="noopener noreferrer"
					>
						Product Pitch
					</a>
				</div>}
				{presentation && <div className="mt-0 flex">
					<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={presentation}
						target="_blank"
						rel="noopener noreferrer"
					>
						Product Presentation
					</a>
				</div>}
				{demo_link && <div className="mt-0 flex">
					<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={demo_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Demo Product
					</a>
				</div>}
				{research_link && <div className="mt-0 flex" >
					<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={research_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Research Documentation
					</a>
				</div>}
				{media_link && <div className="mt-0 flex">
					<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={media_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Research in Media
					</a>
				</div>}
			   </div>
          </motion.div>
      </Tilt>
  );
};

const ResearchProject = () => {
    return (
        <div className="mt-5 flex flex-wrap justify-center gap-4 text-grayscale-50 w-full">
            {research.map((project, index) => (
                <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
        </div>
    );
};

export default ResearchProject;