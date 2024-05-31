import GradientTitle from "../Shared/GradientTitle";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 text-center container mx-auto">
      <div className="py-8">
        <div className="badge badge-lg h-12 badge-outline p-4 rounded-lg font-semibold text-2xl">
          Features
        </div>
        <GradientTitle title="We can build your dream product into a cross-platform juggarnaut" />
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
    </div>
  );
};

export default Features;
