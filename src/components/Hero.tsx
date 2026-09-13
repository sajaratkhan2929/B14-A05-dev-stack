import banner from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="px-6 py-12 md:py-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

      {/* Text */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Build Your Ideal
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          Development Stack
        </h1>

        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xs md:max-w-md mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        <div className="mt-6 flex justify-center md:justify-start gap-3">
          <button className="bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-medium text-sm md:text-base">
            Explore Technologies
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 md:px-5 md:py-2.5 rounded-lg font-medium text-sm md:text-base">
            Learn More
          </button>
        </div>
      </div>

      {/* Image */}
      <img src={banner} alt="Development Stack" className="h-100 w-auto max-h-full object-contain" />

    </section>
  );
}

export default Hero;