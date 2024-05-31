const GradientTitle = ({ title }) => {
  return (
    <h1 className="mb-5 text-6xl text-balance font-bold inline-block bg-gradient-to-t from-neutral-content/40 from-25% to-neutral-content text-transparent bg-clip-text">
      {title}
    </h1>
  )
}

export default GradientTitle;