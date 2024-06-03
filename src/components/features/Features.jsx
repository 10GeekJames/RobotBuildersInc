import GradientTitle from "../Shared/GradientTitle";
import SectionBadge from "../Shared/SectionBadge";
import SectionWrapper from "../Shared/SectionWrapper";
import Feature from "./Feature";

const Features = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 justify-center items-center mb-16">
        <SectionBadge title="Services" />
        <div className="max-w-screen-lg mx-auto">
          <GradientTitle title="We can build your dream product into a cross-platform juggernaut" textSize="lg" fontWeight="medium" />
        </div>
      </div>
      <div className="flex flex-col gap-24">
        <Feature
          title="Custom Software"
          subTitle="Transforming Ideas into Reality"
          image="./Feature1.jpg"
          description="Customized solutions to turn your ideas into powerful applications. We bring together creativity, technology, and expertise to deliver exceptional results."
          reverse={false}
          hasGradient={true}
          // startGradient={"primary/50"}
          // endGradient={"secondary/50"}
        />
        <Feature
          title="Blazor Development"
          subTitle="Full-Stack .NET Applications"
          image="./Feature1.jpg"
          description="Our .NET Blazor development services empower us to craft dynamic web applications with the robustness of C#. Leveraging the Blazor framework, we deliver full-stack solutions that excel in performance and scalability. Whether you require a web app from scratch or seek to enhance an existing one, our expertise ensures your application meets and exceeds the highest standards."
          reverse={true}
          hasGradient={true}
          // startGradient={"primary/50"}
          // endGradient={"secondary/50"}
        />
        <Feature
          title="Blazor WebAssembly (WASM)"
          subTitle="Native-Like Web Experiences"
          image="./Feature1.jpg"
          description="With Blazor WebAssembly, we create wildly interactive web applications that redefine user experiences. By harnessing the power of WebAssembly, we deliver near-native performance, guaranteeing a seamless and engaging application for your users. Our in-shop custom development platform provides projects industry strength security, secure application lazy-loading, and multitenant support by the end of the first week."
          reverse={false}
          hasGradient={true}
          // startGradient={"primary/50"}
          // endGradient={"secondary/50"}
        />
        <Feature
          title=".NET MAUI Development"
          subTitle="One Codebase, Every Platform"
          image="./Feature1.jpg"
          description=".NET MAUI enables us to develop cross-platform applications that offer a consistent user experience across various devices such as Windows, Mac, Android, and iOS/Apple."
          reverse={true}
          hasGradient={true}
          // startGradient={"primary/50"}
          // endGradient={"secondary/50"}
        />
        <Feature
          title="Microsoft Project Rehab & Rescue"
          subTitle="Turning Challenges into Opportunities"
          image="./Feature1.jpg"
          description="We specialize in rehabilitating and rescuing Microsoft projects. With our expertise, we can identify issues, implement best practices, and get your project back on track. Whether you're facing challenges with architecture, performance, or scalability, we have the experience to turn things around and ensure successful project delivery."
          reverse={true}
          hasGradient={true}
          // startGradient={"primary/50"}
          // endGradient={"secondary/50"}
        />
      </div>
    </SectionWrapper>
  );
};

export default Features;
