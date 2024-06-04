import GradientTitle from "../shared/GradientTitle";
import SectionBadge from "../shared/SectionBadge";
import SectionWrapper from "../shared/SectionWrapper";
import FlaskIcon from "../icons/FlaskIcon";
import Value from "./Value";

const Values = () => {
  return (
    <SectionWrapper bgColor={"bg-black/70"}>
        <div className="flex flex-col gap-4 justify-center items-center mb-4">
          <SectionBadge title="Values" />
          <div className="max-w-screen-lg mx-auto">
            <GradientTitle title="Our values are the core of our business" textSize="lg" fontWeight="medium"  />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:flex justify-center p-12 mx-auto">
          <Value icon={<FlaskIcon />} title="Innovation" description="We are constantly looking for new ways to improve our products and services." />
          <Value icon={<FlaskIcon />} title="Innovation" description="We are constantly looking for new ways to improve our products and services." />
          <Value icon={<FlaskIcon />} title="Innovation" description="We are constantly looking for new ways to improve our products and services." />
          <Value icon={<FlaskIcon />} title="Innovation" description="We are constantly looking for new ways to improve our products and services." />
        </div>

    </SectionWrapper>
  )
}

export default Values;