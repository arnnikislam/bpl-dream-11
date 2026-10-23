import bgShadow from "../../assets/bg-shadow.png";
import bannerImg from "../../assets/banner-main.png";
const Hero = () => {
  return (
    <div className="hero w-11/12 md:w-[80%] mx-auto rounded-2xl my-8 bg-black relative">
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-2xl pointer-events-none"
        src={bgShadow}
        alt="shadow"
      />
      <div className="hero-content text-neutral-content text-center relative z-10">
        <div className="w-[85%]">
          <img className="mx-auto mt-6 mb-7" src={bannerImg} alt="banner img" />
          <h1 className="mb-5 text-2xl md:text-5xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mb-5 text-xl">Beyond Boundaries Beyond Limits</p>
          <button className="btn bg-[#E7FE29] mb-6">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
