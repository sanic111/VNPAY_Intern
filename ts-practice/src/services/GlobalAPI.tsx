import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

// Lấy video thịnh hành trong ngày
const getTrendingVideos = () => {
  return axios.get(`${movieBaseURL}/trending/all/day?api_key=${apiKey}`);
};

// Lấy danh sách phim theo thể loại (genre id)
const getMovieByGenreId = (id: number) => {
  return axios.get(
    `${movieBaseURL}/discover/movie?api_key=${apiKey}&with_genres=${id}`,
  );
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
