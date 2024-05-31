import GradientTitle from "../Shared/GradientTitle"

const Feature = ({ title, subTitle, image, description,  }) => {
  return (
    <div className="border-2 text-start p-4 flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center rounded-2xl">
      <div className="relative flex flex-col items-start lg:items-center">
        <div className="absolute z-10 top-12 -right-20 rotate-[30deg] text-nowrap w-[126%]">
          <GradientTitle title={title} />
        </div>
        <img src={image} alt={title} className="mask mask-triangle-4 w-3/4 lg:w-full" />
      </div>
      <div>
        <GradientTitle title={subTitle} />
        <p className="text-xl">{description}</p>
      </div>
    </div>
  )
}

export default Feature;
