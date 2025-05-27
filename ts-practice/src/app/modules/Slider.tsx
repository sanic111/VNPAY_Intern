import React, { useEffect, useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import GlobalAPI from "../../services/GlobalAPI";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

type Movie = {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string;
};

function Slider() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalAPI.getTrendingVideos()
      .then((resp) => {
        setMovieList(resp.data.results);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  };

  const sliderRight = () => {
    if (elementRef.current) {
      const width = elementRef.current.clientWidth;
      elementRef.current.scrollLeft += width;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      const width = elementRef.current.clientWidth;
      elementRef.current.scrollLeft -= width;
    }
  };

  return (
    <div className="relative overflow-hidden">
      <HiChevronLeft
        className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer text-4xl text-white md:block"
        onClick={sliderLeft}
      />
      <HiChevronRight
        className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer text-4xl text-white md:block"
        onClick={sliderRight}
      />

      <div
        ref={elementRef}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {movieList.map((item) => (
          <div key={item.id} className="w-screen flex-shrink-0 snap-start">
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt={item.title || item.name}
              className="h-[310px] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
