import UiButton from "@/components/ui/UiButton";


const features = [
	{
		title: "Target Skillsets",
		color: "bg-pink-300",
		iconPath: "/images/icons_img/icon1.svg",
	},
	{
		title: "Extra Activities",
		color: "bg-green-300",
		iconPath: "/images/icons_img/icon2.svg",
	},
	{
		title: "Complete Tracking",
		color: "bg-yellow-300",
		iconPath: "/images/icons_img/icon3.svg",
	},
	{
		title: "Individual Bus",
		color: "bg-blue-300",
		iconPath: "/images/icons_img/icon4.svg",
	},
];

const WhyChooseUs = () => (
	<section id="why-choose-us" className="py-28 bg-white relative overflow-hidden z-10">
		
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex flex-col md:flex-row items-center gap-16">
				{/* Left - Content */}
				<div className="flex-1">
					<h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center md:text-left">
						Why Choose us
					</h2>
					<div className="grid grid-cols-2 gap-x-10 gap-y-8 mb-8">
						{features.map((feature, idx) => (
							<div key={idx} className="flex items-center gap-4">
								<div
									className={`${feature.color}   flex items-center justify-center shadow-md p-2  scale-1 rounded-full`}
								>
									<img
										src={feature.iconPath}
										alt={feature.title}
										className="w-8 h-8"
									/>
								</div>
								<span className="font-semibold text-lg text-gray-800">
									{feature.title}
								</span>
							</div>
						))}
					</div>
					
				</div>
				{/* Right - Image */}
				<div className="flex-1 flex items-center justify-center relative">
					<img
						src="/images/gallery/img26.jpg"
						alt="Children in class"
						className="w-[400px] h-[300px] object-cover rounded-[60px_0_60px_0/60px_0_60px_0] shadow-xl"
						style={{ objectPosition: "center" }}
					/>
				</div>
			</div>
		</div>
		
	</section>
);

export default WhyChooseUs;
