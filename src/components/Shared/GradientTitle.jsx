const GradientTitle = ({ title, additionalClasses = "", textSize }) => {
  const getTextSize = () => {
    if (textSize === "sm") {
      return "text-2xl";
    } else if (textSize === "md") {
      return "text-4xl";
    } else if (textSize === "lg") {
      return "text-6xl";
    } else if (textSize === "xl") {
      return "text-8xl";
    }
    return "text-6xl";
  }
  return (
    <h1 className={`${getTextSize()} text-balance font-bold inline-block bg-gradient-to-t from-slate-900/20 dark:from-neutral-content/20 from-5% dark:from-25% to-slate-900 dark:to-neutral-content text-transparent bg-clip-text ${additionalClasses}`}>
      {title}
    </h1>
  )
}

export default GradientTitle;