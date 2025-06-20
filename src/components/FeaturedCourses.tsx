import UiButton from "@/components/ui/UiButton";

const courses = [
	{
		title: "Kids Activity Clubs",
		color: "bg-pink-400",
		icon: "/images/icons_img/icon6.svg",
	},
	{
		title: "Elementary School",
		color: "bg-green-400",
		icon: "/images/icons_img/icon7.svg",
	},
	{
		title: "Middle (10-16) Years",
		color: "bg-yellow-400",
		icon: "/images/icons_img/icon8.svg",
	},
	{
		title: "Kids' Parties",
		color: "bg-blue-400",
		icon: "/images/icons_img/icon9.svg", 
	},
	{
		title: "yoga class",
		color: "bg-pink-400",
		icon: "/images/icons_img/icon10.svg",
	},
	{
		title: "Art & Craft",
		age: "",
		color: "bg-green-400",
		icon: "/images/icons_img/icon11.svg",
	},
];

const FeaturedCourses = () => {
	return (
		<section id="courses" className="py-20 bg-[#2d21c6] relative">
			


			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Left - Child Image with colorful arc */}
					<div className="relative flex justify-center items-end">
						<img
							src="/images/bg_img/bg1.png"
							alt="Happy child jumping"
							className="w-[320px] md:w-[400px] object-contain z-10"
						/>
						
					</div>
					{/* Right - Courses */}
					<div>
						<h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
							Featured Courses
						</h2>
						<div className="grid grid-cols-2 gap-x-10 gap-y-8 mb-8">
							{courses.map((course, index) => (
								<div key={index} className="flex items-center gap-4">
									<div
										className={`${course.color}   flex items-center justify-center shadow-md p-2  scale-1 rounded-full`}
									>
										<img
											src={course.icon}
											alt={course.title}
											className="w-8 h-8"
										/>
									</div>
									<div>
										<h3 className="font-semibold text-white text-base mb-1">
											{course.title}
										</h3>
										{course.age && (
											<p className="text-gray-200 text-xs">
												{course.age}
											</p>
										)}
									</div>
								</div>
							))}
						</div>
						 
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedCourses;
