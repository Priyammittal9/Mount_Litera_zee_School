import { useState } from "react";
import UiButton from "@/components/ui/UiButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const announcements = [
	{
		text: "Appropriately engage diverse resources for next-generation systems. Professionally foster extensive paradigms vis-a-vis multidisciplinary systems. Synergistically deploy maintainable products and frictionless methodologies.",
	},
	{
		text: "Empower innovative solutions for modern education. Seamlessly integrate technology and creativity for holistic child development.",
	},
	{
		text: "Foster a nurturing environment for learning and growth. Encourage curiosity and collaboration among students.",
	},
];

const Announcements = () => {
	const [current, setCurrent] = useState(0);

	const prev = () =>
		setCurrent((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
	const next = () =>
		setCurrent((prev) =>
			prev === announcements.length - 1 ? 0 : prev + 1
		);

	return (
		<section id="announcement" className="py-20 bg-white relative">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
					{/* Left - Title and Navigation */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
							Announcement
						</h2>
						<div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
							<button
								className="w-11 h-11 rounded-full bg-pink-300 flex items-center justify-center text-white text-xl shadow hover:scale-105 transition"
								onClick={prev}
								aria-label="Previous"
							>
								<ChevronLeft size={28} />
							</button>
							<button
								className="w-11 h-11 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 text-xl shadow hover:scale-105 transition"
								onClick={next}
								aria-label="Next"
							>
								<ChevronRight size={28} />
							</button>
						</div>
						{/* Dots */}
						<div className="flex gap-2 mt-2 ml-0 md:ml-2 justify-center md:justify-start">
							{announcements.map((_, idx) => (
								<span
									key={idx}
									className={`w-3 h-3 rounded-full transition ${
										idx === current ? "bg-pink-400" : "bg-gray-300"
									}`}
								/>
							))}
						</div>
					</div>
					{/* Right - Announcement Content */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<p className="text-gray-500 mb-8 leading-relaxed text-lg md:text-md font-medium">
							{announcements[current].text}
						</p>
						<UiButton
							color="#3d246c"
							textColor="#fff"
							borderColor="#3d246c"
							style={{
								borderRadius: "20px 30px 20px 20px",
								fontSize: "1rem",
								fontWeight: 400,
								width: "fit-content",
								minWidth: 120,
								boxShadow: "2px 6px 0px 0px #e5e5e5",
								alignSelf: "center",
								padding: "8px 30px"
							}}
						>
							View All
						</UiButton>
					</div>
				</div>
				{/* Decorative dot */}
				<span className="absolute right-8 bottom-8 w-2 h-2 rounded-full bg-pink-400"></span>
			</div>
		</section>
	);
};

export default Announcements;
