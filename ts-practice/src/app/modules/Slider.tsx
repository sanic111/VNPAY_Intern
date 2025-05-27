import React, { useEffect, useState, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import GlobalAPI from "../../services/GlobalAPI";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

type Movie = {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string;
};

function Slider() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementRef = useRef<HTMLDivElement>(null); //  Tạo ref

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
      elementRef.current.scrollLeft += screenWidth - 110;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenWidth - 110;
    }
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="absolute left-0 z-10 mx-8 mt-[150px] hidden cursor-pointer text-[30px] text-white md:block"
        onClick={sliderLeft}
      />
      <HiChevronRight
        className="absolute right-0 z-10 mx-8 mt-[150px] hidden cursor-pointer text-[30px] text-white md:block"
        onClick={sliderRight}
      />

      <div
        ref={elementRef} // Gắn ref
        className="flex overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {movieList.map((item) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt={item.title || item.name}
            className="duration-5 mr-5 h-[310px] min-w-full rounded-lg border-gray-400 object-cover object-left-top transition-all ease-in hover:border-[4px]"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
