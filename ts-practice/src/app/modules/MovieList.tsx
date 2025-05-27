import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../../services/GlobalAPI";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

type Props = {
  genreId: number;
};

type Movie = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
};

function MovieList({ genreId }: Props) {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (genreId) {
      getMovieByGenreId();
    }
  }, [genreId]);

  const getMovieByGenreId = () => {
    GlobalAPI.getMovieByGenreId(genreId)
      .then((resp) => {
        setMovieList(resp.data.results);
      })
      .catch((err) => {
        console.error("Lỗi khi gọi API theo thể loại:", err);
      });
  };

  const slideRight = () => {
    elementRef.current && (elementRef.current.scrollLeft += 500);
  };

  const slideLeft = () => {
    elementRef.current && (elementRef.current.scrollLeft -= 500);
  };

  return (
    <div className="relative">
      {/* Nút trái */}
      <IoChevronBackOutline
        onClick={slideLeft}
        className="absolute left-0 top-[40%] z-10 hidden cursor-pointer p-2 text-[50px] text-white md:block"
      />

      {/* Danh sách phim */}
      <div
        ref={elementRef}
        className="flex gap-8 overflow-x-auto scroll-smooth px-3 pb-4 pt-4 scrollbar-hide"
      >
        {movieList.map((item, index) =>
          index % 3 === 0 ? (
            <HrMovieCard key={item.id} movie={item} />
          ) : (
            <MovieCard key={item.id} movie={item} />
          ),
        )}
      </div>

      {/* Nút phải */}
      <IoChevronForwardOutline
        onClick={slideRight}
        className="absolute right-0 top-[40%] z-10 hidden cursor-pointer p-2 text-[50px] text-white md:block"
      />
    </div>
  );
}

export default MovieList;
