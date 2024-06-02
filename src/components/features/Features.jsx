import GradientTitle from "../Shared/GradientTitle";
import SectionBadge from "../Shared/SectionBadge";
import SectionWrapper from "../Shared/SectionWrapper";
import Feature from "./Feature";

const Features = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 justify-center items-center mb-16">
        <SectionBadge title="Features" />
        <div className="max-w-screen-lg mx-auto">
          <GradientTitle title="We can build your dream product into a cross-platform juggarnaut" textSize="lg" fontWeight="medium" />
        </div>
      </div>
      <Feature
        title="Custom Software"
        subTitle="Feel what it's like to bring your idea into reality"
        image="./Feature1.jpg"
        description="Crafting tailored software solutions to meet your unique business needs."
        reverse={false}
        hasGradient={true}
        // startGradient={"primary/50"}
        // endGradient={"secondary/50"}
      />
    </SectionWrapper>
  );
};

export default Features;
