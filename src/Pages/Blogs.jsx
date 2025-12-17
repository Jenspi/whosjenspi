/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Blogs.jsx (Projects.jsx copy)
   Version: I
   Creation: 02/06/2023
   Last modification: 12/17/2025 (Jenny Spicer)
*/

import Writings from "../Components/BlogCards";
import SectionTitle from "../Components/SectionTitle";

const Blogs = () => {
	return (
		<div className="w-full flex justify-center" id="projects">
			<div className="w-full xl:w-[70%] flex flex-col pb-16">
				<div className="w-full ">
					<SectionTitle title="BLOGS" subtitle="What I have written so far" />
				</div>
				<Writings/>
			</div>
		</div>
	);
};

export default Blogs;