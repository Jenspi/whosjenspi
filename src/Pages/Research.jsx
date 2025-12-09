/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Research.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 12/09/2025 (Jenny Spicer)
*/

import ResearchProject from "../Components/ResearchCards";
import SectionTitle from "../Components/SectionTitle";

const Research = () => {
	return (
		<div className="w-full flex justify-center" id="research">
			<div className="w-full xl:w-[70%] flex flex-col pb-16">
				<div className="w-full ">
					<SectionTitle title="RESEARCH" subtitle="What I have been investigating" />
				</div>
				<ResearchProject />
			</div>
		</div>
	);
};

export default Research;