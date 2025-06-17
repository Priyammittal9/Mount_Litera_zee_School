import UiButton from '@/components/ui/UiButton';

const HeroSection = () => (
  <section
    className="relative pt-36 pb-20 overflow-hidden"
    style={{
      background: "radial-gradient(ellipse at 60% 0%, #b84be6 0%, #8e24aa 60%, #6a1b9a 100%)",
      color: "#fff"
    }}
  >
    {/* "PLAY SCHOOL" background text */}
    <span
      style={{
        position: "absolute",
        top: "28%",
        left: "0",
        width: "100%",
        textAlign: "center",
        fontSize: "200px",
        fontWeight: 700,
        color: "rgba(255,255,255,0.07)",
        letterSpacing: "0.1em",
        userSelect: "none",
        zIndex: 1,
        pointerEvents: "none",
        lineHeight: 1,
        textTransform: "uppercase"
      }}
    >
      PLAY <br /> SCHOOL
    </span>
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 relative z-10">
      <div className="max-w-xl mt-8">
        <h1 className="text-[4rem] md:text-[6rem] font-semibold mb-2 leading-none">
          Admission
        </h1>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xl md:text-2xl font-bold text-yellow-300 tracking-wide">
            OPEN FOR
          </span>
          <span className="text-3xl md:text-5xl font-extrabold text-yellow-400 tracking-wider">
            2025–2026
          </span>
        </div>
        <p className="mb-8 text-xs md:text-sm font-medium tracking-wide">
          Play ground &nbsp;|&nbsp; Free school &nbsp;|&nbsp; After school
        </p>
        <UiButton
          color="rgb(0 182 170)"
          textColor="#fff"
          borderColor="rgb(0 182 170)"
          // style={{
          //   fontSize: "1.25rem",
          //   padding: "14px 48px",
          //   marginTop: "10px",
          //   fontWeight: 400
          // }}
          className='text-[1.25rem] px-[0.875rem] py-[1.1rem] w-full md:w-[44%] font-medium mt-4 mb-2 text-xl'
        >
          Enroll Now
        </UiButton>
      </div>
      <div className="relative mt-10 md:mt-0">
        <img src="images/bg_img/bg2.png" alt="" className="w-[500px] h-[350px] rounded-xl shadow-xl opacity-75" />
      </div>
    </div>
    
  </section>
);

export default HeroSection;
