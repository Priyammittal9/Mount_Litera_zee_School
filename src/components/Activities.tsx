import UiButton from "@/components/ui/UiButton";

const activities = [
  { icon: "/images/icons_img/icon5.svg", title: "Outdoor Games" },
  { icon: "/images/icons_img/icon5.svg", title: "Sport Activites" },
  { icon: "/images/icons_img/icon5.svg", title: "Table/Floor Toys" },
  { icon: "/images/icons_img/icon5.svg", title: "Water Games" },
];

const Activities = () => (
  <section id="activities" className="relative overflow-hidden bg-white pb-[50px] pt-[50px]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 gap-3">
      {/* Left Content */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-5xl font-semibold text-gray-800 mb-2">
          We Provide the
        </h2>
        <h3 className="text-4xl font-semibold text-gray-800 mb-6">
          Main Kids Activites
        </h3>
        <p className="text-gray-700 mb-2 text-sm">
         Our extra-curricular and co-curricular programs are designed to nurture the unique skills and talents of each child. From dramatics to debates, arts to music, sports to yoga and martial arts, MLZS Bhopal takes care of all aspects of a child's development.
        </p>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-8">
          {activities.map((activity, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <img src={activity.icon} alt="" className="w-6 h-6" />
              <span className="font-semibold text-base text-gray-800 tracking-wide">
                {activity.title}
              </span>
            </div>
          ))}
        </div>
        <UiButton
          color="#3d246c"
          textColor="#fff"
          borderColor="#3d246c"
          style={{
            borderRadius: "16px 32px 16px 16px",
            fontSize: "1rem",
            fontWeight: 400,
            minWidth: 120,
            boxShadow: "0 4px 0px 0px #d1d5db",
            marginLeft: 0,
          }}
          className="font-normal px-10 py-3"
        >
          View All
        </UiButton>
      </div>
      {/* Right Illustration */}
      <div className="flex-1 flex items-center justify-center relative ">
       
        {/* Child image */}
        <img
          src="/images/gallery/img39.jpg"
          alt="Kid painting"
          className="relative z-20 w-[500px] h-[350px] object-contain"
          
        />
      </div>
    </div>
    
  </section>
);

export default Activities;
