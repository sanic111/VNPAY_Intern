import bannerI from "../../assets/Images/banner.png";

const Banner = () => {
  return (
    <section className="bg-theme-light/50 py-12 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col-reverse items-center justify-between gap-8 rounded-2xl border p-6 shadow-lg md:flex-row md:p-12">
          {/* Nội dung bên trái */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              WELCOME TO DISNEY WORLD
            </h2>
            <p className="text-sm text-white sm:text-base md:text-lg">
              Each club with simplicity, value, and your good health in mind.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <button className="bg-primary hover:bg-primary/80 rounded-full px-6 py-3 text-sm font-semibold text-white transition sm:text-base">
                Get Started
              </button>
              <button className="rounded-full border border-gray-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-100 hover:text-gray-800 sm:text-base">
                Get Tickets
              </button>
            </div>
          </div>

          {/* Hình ảnh hoặc placeholder */}
          <div className="flex h-40 w-full flex-1 items-center justify-center rounded-xl bg-gray-100 sm:h-56 md:h-64">
            <span className="text-gray-400">
              {" "}
              <img src={bannerI} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
