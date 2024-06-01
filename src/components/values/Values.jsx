import GradientTitle from "../Shared/GradientTitle";
import FlaskIcon from "../icons/FlaskIcon";
import Value from "./Value";

const Values = () => {
  return (
    <div className="bg-black/70 px-12 py-16  lg:p-32">
      <div className="flex flex-col gap-4 justify-center items-center mb-4">
        <div className="badge badge-lg h-12 badge-outline p-4 rounded-lg font-semibold" ><p>Values</p></div>
        <GradientTitle title="Our values are the core of our business" textSize="md" fontWeight="medium" />
      </div>
      <div className="grid grid-cols-2 gap-8 lg:flex justify-center p-12 container mx-auto">
        <Value icon={<FlaskIcon />} title="Innovation" description="We are constantly looking for new ways to improve our products and services." />
        <Value icon={<FlaskIcon />} title="Innovation" description="We are constantly looking for new ways to improve our products and services." />
        <Value icon={<FlaskIcon />} title="Innovation" description="We are constantly looking for new ways to improve our products and services." />
        <Value icon={<FlaskIcon />} title="Innovation" description="We are constantly looking for new ways to improve our products and services." />
      </div>
    </div>
  )
}

export default Values;