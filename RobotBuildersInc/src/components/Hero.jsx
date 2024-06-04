import GradientTitle from "./shared/GradientTitle";

const Hero = () => {
  return (
  <div className="hero min-h-screen">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content w-full py-16">
      <div className="flex flex-col lg:flex-row w-full gap-8">
        <div className="max-w-md flex flex-col items-center text-center mx-auto lg:items-start lg:text-start justify-center gap-4">
          <div className="badge badge-lg h-12 badge-outline p-4 rounded-lg font-semibold">Your Vision, Our Expertise</div>
          <GradientTitle title="Take your idea to the next level." additionalClasses="leading-[1]" />
          <p className="mb-5">Customized solutions to turn your ideas into powerful applications. We bring together creativity, technology, and expertise to deliver exceptional results.</p>
          {/* <p className="mb-5">We transform your business challenges into custom software solutions. Let us help you streamline processes and boost performance with our expert development services.</p> */}
          <button className="btn btn-primary w-1/3">Fulfill Dream</button>
          <p className="text-sm text-neutral-content-lighter">* We don't bite</p>
        </div>
        <div className="relative bg-[radial-gradient(ellipse_at_center,#ffffff_0%,oklch(var(--p))_20%,#ffffff00_60%);] w-full h-full drop-shadow-[0_0_50px_oklch(var(--nc))]">
          <img src="./BG2.jpg" alt="Brainstorming" className="mask mask-squircle w-full h-full mix-blend-multiply" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Hero;