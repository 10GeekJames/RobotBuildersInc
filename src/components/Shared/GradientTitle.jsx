const GradientTitle = ({ title, additionalClasses = "", textSize, fontWeight }) => {
  const getTextSize = () => {
    if (textSize === "sm") {
      return "text-2xl";
    } else if (textSize === "md") {
      return "text-4xl";
    } else if (textSize === "lg") {
      return "text-5xl";
    } else if (textSize === "xl") {
      return "text-7xl";
    } else if (textSize === "2xl") {
      return "text-8xl";
    } else if (textSize === "3xl") {
      return "text-9xl";
    }
    return "text-6xl";
  }

  const getFontWeight = () => {
    if (fontWeight === "light") {
      return "font-light";
    } else if (fontWeight === "normal") {
      return "font-normal";
    } else if (fontWeight === "medium") {
      return "font-medium";
    } else if (fontWeight === "semibold") {
      return "font-semibold";
    } else if (fontWeight === "bold") {
      return "font-bold";
    }
    return "font-bold";
  }
  return (
    <h1 className={`text-balance inline-block bg-gradient-to-t from-base-content/20 from-25% to-base-content text-transparent bg-clip-text ${additionalClasses} ${getFontWeight()} ${getTextSize()} `}>
      {title}
    </h1>
  )
}

export default GradientTitle;