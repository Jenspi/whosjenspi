/*
   Author: Jenny Spicer
   FileName: ReadMore.jsx
   Version: I
   Creation: 12/14/2025
   Last modification: 12/14/2025

   Creating a ReadMore component in React reference (Filipe Pfluck):
   https://medium.com/@filipepfluckdev/creating-a-read-more-component-in-react-4afd1d17d40b
*/

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { projects } from "../Constants/constants";
import { githubIcon } from "../assets";
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

const ReadMoreProps = {
	id: '',
	text: '',
	amountOfWords: 36
}

export const ReadMore = ({ id, text, amountOfWords = 25 }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const splittedText = text.split(' ')
	const itCanOverflow = splittedText.length > amountOfWords
	const beginText = itCanOverflow
		? splittedText.slice(0, amountOfWords - 1).join(' ')
		: text
	const endText = splittedText.slice(amountOfWords - 1).join(' ')
	
	const handleKeyboard = (e) => {
		if (e.code === 'Space' || e.code === 'Enter') {
			setIsExpanded(!isExpanded)
		}
	}

	return (
		<p id={id}>
			{beginText}
			{itCanOverflow && (
				<>
					{!isExpanded && <span>... </span>}
					<span 
						className={`${!isExpanded && 'hidden'}`} 
						aria-hidden={!isExpanded}
					>
						{" "+endText}
					</span>
					<span
						className='text-violet-400 ml-2 float-right cursor-pointer'
						role="button"
						tabIndex={0}
						aria-expanded={isExpanded}
						aria-controls={id}
						onKeyDown={handleKeyboard}
						onClick={() => setIsExpanded(!isExpanded)}
					>
						{isExpanded ? 'Read less...' : 'Read more...'}
					</span>
				</>
			)}
		</p>
	)
}