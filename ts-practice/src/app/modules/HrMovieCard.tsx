import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

type Props = {
  movie: {
    id: number;
    title?: string;
    name?: string;
    backdrop_path?: string;
  };
};

function HrMovieCard({ movie }: Props) {
  const imageUrl = movie.backdrop_path
    ? IMAGE_BASE_URL + movie.backdrop_path
    : "/fallback-image.jpg"; // fallback nếu không có ảnh

  return (
    <section className="w-[200px]transition-all flex-shrink-0 duration-150 ease-in hover:scale-110">
      <img
        src={imageUrl}
        alt={movie.title || movie.name || "Movie"}
        className="w-[110px] cursor-pointer rounded-lg border-gray-400 hover:border-[3px] md:w-[260px]"
      />
      <h2 className="mt-2 w-[110px] truncate text-sm font-semibold text-white md:w-[260px] md:text-base">
        {movie.title || movie.name}
      </h2>
    </section>
  );
}

export default HrMovieCard;
