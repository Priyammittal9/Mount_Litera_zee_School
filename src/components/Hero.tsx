import UiButton from '@/components/ui/UiButton';

const HeroSection = () => (
  <section
    id='home'
    className="relative pt-[100px] pb-[80px] overflow-hidden w-full"
    style={{
      background: "radial-gradient(ellipse at 60% 0%, #b84be6 0%, #8e24aa 60%, #6a1b9a 100%)",
      color: "#fff"
    }}
  >
    {/* "PLAY SCHOOL" background text */}
    <span
      style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        textAlign: "center",
        fontSize: "120px",
        fontWeight: 700,
        color: "rgba(255,255,255,0.07)",
        letterSpacing: "0.1em",
        userSelect: "none",
        zIndex: 1,
        pointerEvents: "none",
        lineHeight: 1,
        textTransform: "uppercase",
        width: "100%",
      }}
    >
      PLAY <br /> SCHOOL
    </span>
    {/* Responsive two-column layout */}
    <div className="container mx-auto py-[50px] relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left: Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center sm:items-center md:items-start text-left lg:text-left">
          <h1
            className="pb-8 font-bold mb-4 leading-none  text-center md:text-start"
            style={{
              fontSize: "4.5vw", // Responsive font size using vw
              maxWidth: "100%",
              lineHeight: 1.1,
            }}
          >
            Mount Litera Zee <span className="text-yellow-400">School</span> K12, Tikamgarh MP
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
            <span className="text-lg md:text-lg lg:text-2xl font-bold text-yellow-300 tracking-wide">
              Admission OPEN FOR
            </span>
            <span className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-yellow-400 tracking-wider">
              2025–2026
            </span>
          </div>
          <p className="mb-8 text-sm md:text-base lg:text-lg font-medium tracking-wide">
            Play ground &nbsp;|&nbsp; Free school &nbsp;|&nbsp; After school
          </p>
          <UiButton
            color="rgb(0 182 170)"
            textColor="#fff"
            borderColor="rgb(0 182 170)"
            className='text-base md:text-lg lg:text-xl px-6 py-3 w-full sm:w-auto lg:w-[60%] font-semibold mt-4 mb-2'
          >
            Enroll Now
          </UiButton>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src="images/bg_img/bg2.png"
            alt=""
            className="
              w-full
              max-w-[320px]
              sm:max-w-[500px]
              md:max-w-[700px]
              lg:max-w-[850px]
              xl:max-w-[1000px]
              min-h-[300px]

              md:min-h-[300px]
              lg:min-h-[400px]
              xl:min-h-[500px]
              rounded-xl
              shadow-xl
            "
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
