import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../../services/GlobalAPI";
import MovieCard from "./MovieCard";
import HrMovieCard from "./HrMovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

type Props = {
  genreId: number;
  genreName?: string; // Optional: để hiển thị tên thể loại
};

type Movie = {
  id: number;
  title?: string;
  name?: string;
  poster_path: string;
};

function MovieList({ genreId, genreName }: Props) {
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
    <div className="relative mb-10">
      {/* Tiêu đề thể loại */}
      {genreName && (
        <h2 className="mb-4 px-2 text-2xl font-semibold text-white md:text-3xl">
          {genreName}
        </h2>
      )}

      {/* Nút trái */}
      <IoChevronBackOutline
        onClick={slideLeft}
        className="absolute left-0 top-[50%] z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-[40px] text-white hover:bg-black md:block"
      />

      {/* Danh sách phim */}
      <div
        ref={elementRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-2 pb-4 pt-2 scrollbar-hide"
      >
        {movieList.length === 0 ? (
          <p className="text-white">Không có phim nào...</p>
        ) : (
          movieList.map((item, index) =>
            index % 3 === 0 ? (
              <HrMovieCard key={item.id} movie={item} />
            ) : (
              <MovieCard key={item.id} movie={item} />
            ),
          )
        )}
      </div>

      {/* Nút phải */}
      <IoChevronForwardOutline
        onClick={slideRight}
        className="absolute right-0 top-[50%] z-10 hidden -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2 text-[40px] text-white hover:bg-black md:block"
      />
    </div>
  );
}

export default MovieList;
