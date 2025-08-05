const LandingPageTxt = () => {
  return (
    <>
      {/* Image above name tag */}
      <img
        src="media/templogo.png"
        className="absolute pointer-events-none z-10 top-24 sm:top-32 md:top-44 left-1/2 transform -translate-x-1/2 w-[80%] max-w-[300px] md:max-w-[400px]"
        alt="temp logo"
      />

      {/* Name tag below image */}
      <div className="p-2 md:p-6 absolute pointer-events-none z-20 text-center md:text-left top-[70%] md:top-[60%] w-full px-4 md:px-0 md:w-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight font-['Cantata_One'] font-normal">
          Steven Nguyen
        </h1>
        <div className="mt-2 md:mt-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Cantata_One']">
            Software Developer
          </h2>
        </div>
      </div>
    </>
  );
};

export default LandingPageTxt;
