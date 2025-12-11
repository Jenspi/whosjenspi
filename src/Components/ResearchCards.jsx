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
	short_description,
	// tags,
}) => {
	const [isExpanded, setIsExpanded] = useState(false);
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
              </div>
		  		{/* Content Section */}
              <div className="mt-3 flex-grow">
                  <h3 className="text-white font-bold text-2xl">{name}</h3>
				{/* Create dropdown for description if it exceeds 4 lines */}
				{!isExpanded && <p className={`mt-0 text-secondary text-[14px] leading-snug ${!isExpanded ? 'line-clamp-6' : ''}`}>
					{/* {tags && <p className="text-white text-secondary text-[16px] flex gap-1">
		  				<span>🔗</span>
						<span><b><i>{tags}</i></b></span>
				   	</p>} */}
					{short_description}
				</p>}
				<div className={`mt-0 text-secondary text-[14px] leading-snug ${!isExpanded ? 'line-clamp-1' : ''}`}>
				
					{!isExpanded && <button 
						onClick={() => setIsExpanded(!isExpanded)}
						className="text-primary text-[14px] mt-1 hover:underline text-right w-full"
					>
						{isExpanded ? 'Less Details...' : 'More Details...'}
					</button>}

					<p className="text-white font-bold text-secondary text-[16px]">🗓️ {date}</p>
						{advised_under && <p className="text-white text-secondary text-[16px] flex gap-1">
							<span>🔍</span>
							<span><b>Advisor:</b> {advised_under}</span>
						</p>}
						{self_advised ? 
							<p className="text-white text-secondary text-[16px] flex gap-1">
								<span>🔍</span>
								<span><b>Self-Advised</b></span>
							</p>
							: null
						}
						{self_directed ? 
							<p className="text-white text-secondary text-[16px] flex gap-1">
								<span>🗂️</span>
								<span><b>Self-Directed</b></span>
							</p>
							: null
						}
					{lab && <p className="text-white text-secondary text-[16px] flex gap-1">
							<span>🔬</span>
							<span><i>{lab}</i></span>
						</p>}
						{/* Description Section */}
						<div className={`mt-2 text-secondary text-[14px] leading-snug ${isExpanded ? 'line-clamp-10' : ''}`}>
							<p className='mt-2 text-secondary text-[14px]'>
								{description}
							</p>
						</div>
						{/* Toggle Button */}
						{isExpanded && <button 
							onClick={() => setIsExpanded(!isExpanded)}
							className="text-primary text-[14px] mt-1 hover:underline text-right w-full"
						>
							{isExpanded ? 'Less Details...' : 'More Details...'}
						</button>}
				</div>{/* might need to be up */}
              </div>
              <div className="mt-2 flex flex-wrap gap-1"></div>
			  <div className="mt-3 flex flex-wrap justify-center items-center gap-2">
				{/* BUTTONS w/ Conditional Rendering for fields: */}
				{pitch && <div className="mt-0 flex">
					<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={pitch}
						target="_blank"
						rel="noopener noreferrer"
					>
						{/* Product Pitch */}Pitch
					</a>
				</div>}
				{presentation && <div className="mt-0 flex">
					<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={presentation}
						target="_blank"
						rel="noopener noreferrer"
					>
						{/* Product Presentation */}Presentation
					</a>
				</div>}
				{demo_link && <div className="mt-0 flex">
					<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={demo_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{/* Demo Product */}Demo
					</a>
				</div>}
				{research_link && <div className="mt-0 flex" >
					<a
						className="shadow-md shadow-primary p-2 bg-tertiary rounded-lg flex justify-center"
						href={research_link}
						target="_blank"
						rel="noopener noreferrer"
					>
						Documentation
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