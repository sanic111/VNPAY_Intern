const Banner = () => {
  return (
    <section className="bg-gray-400 py-16 text-white">
      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row">
        {/* Left side (text content) */}
        <div className="flex h-48 flex-1 flex-col justify-center rounded-l-2xl bg-gray-700 px-4 leading-relaxed md:h-64">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            WELCOME TO FITNESS EVOLUTION
          </h2>
          <p className="mb-6">
            Each club with simplicity, value, and your good health in mind.
          </p>
          <div className="flex gap-4">
            <button className="rounded-full bg-white px-4 py-2 text-gray-800 hover:bg-gray-200">
              Get Started
            </button>
            <button className="rounded-full border border-white px-4 py-2 hover:bg-white hover:text-gray-800">
              Talk to Sales
            </button>
          </div>
        </div>

        {/* Right side (image or empty placeholder) */}
        <div className="h-48 flex-1 rounded-r-2xl bg-white shadow-inner md:h-64"></div>
      </div>
    </section>
  );
};
export default Banner;
