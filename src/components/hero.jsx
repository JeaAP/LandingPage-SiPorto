export default function Hero() {
  return (
    <div id="hero" className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src="./assets/img/image-bg1.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-8xl lg:text-9xl font-normal text-black max-w-4xl leading-snug ">
            Creating
            <span className="bg-orange-500 rounded-full px-8 py-1 ml-2 sm:ml-4 text-white opacity-60">
              brands
            </span>
            <br />
            and digital
            <br />
            <span className="bg-orange-500 rounded-full px-8 py-1 text-white opacity-60 ml-24">
              {" "}solutions
            </span>
            <span className="bg-orange-500 rounded-full h-4 w-4 sm:h-6 sm:w-6 lg:h-7 lg:w-7 inline-block opacity-60"></span>
          </h1>
        </div>
      </div>
    </div>
  );
}