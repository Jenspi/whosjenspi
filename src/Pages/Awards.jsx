/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: Projects.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 11/24/2025 (Jenny Spicer)
*/

import WorksAwarded from "../Components/AwardCards";
import SectionTitle from "../Components/SectionTitle";

const Awards = () => {
	return (
		<div className="w-full flex justify-center" id="awards">
			<div className="w-full xl:w-[70%] flex flex-col pb-16">
				<div className="w-full ">
					<SectionTitle title="AWARDS" subtitle="What I have won" />
				</div>
				<WorksAwarded/>
			</div>
		</div>
	);
};

export default Awards;