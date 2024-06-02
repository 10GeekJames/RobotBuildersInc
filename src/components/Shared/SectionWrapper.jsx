const SectionWrapper = ({children, bgColor = ""}) => {
  return (
    <section className={`flex flex-col justify-center items-center md:px-12 py-16 lg:p-32 text-center w-screen ${bgColor}`}>
      <div className="container">
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;