import GradientTitle from "./Shared/GradientTitle";

const Hero = () => {
  return (
  <div className="hero min-h-screen">
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content w-full">
      <div className="flex flex-col lg:flex-row w-full gap-8">
        <div className="max-w-md flex flex-col justify-center gap-4">
          <div className="badge badge-lg h-12 badge-outline p-4 rounded-lg font-semibold" >Something Great to Emphasis</div>
          <GradientTitle title="Take your idea to the next level." />
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary w-1/3">Fulfill Dream</button>
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