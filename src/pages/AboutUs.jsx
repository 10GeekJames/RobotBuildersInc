import GradientTitle from "../components/Shared/GradientTitle";
import SectionWrapper from "../components/Shared/SectionWrapper";

const AboutUs = () => {
  return (
    <SectionWrapper>
      <GradientTitle title="About Us" />
      <p className="text-lg max-w-2xl mx-auto">
        RobotBuildersInc is more than just a software development company; we're
        your partner in innovation. With over 30 years of experience in the
        Microsoft development ecosystem, our team is dedicated to delivering
        innovative solutions that exceed your expectations. When you choose
        RobotBuildersInc, you're not just getting a software development
        company; you're getting a team of experts who are committed to your
        rapid iteration towards a shared success.
      </p>
    </SectionWrapper>
  );
};

export default AboutUs;
