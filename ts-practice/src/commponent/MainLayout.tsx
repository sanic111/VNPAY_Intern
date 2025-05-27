import { Outlet } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Slider from "./Slider";
import ProductionHouse from "./ProductionHouse";
import GenreMovieList from "./GenreMovieList";
const MainLayout = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header></Header>
      <Slider></Slider>
      <ProductionHouse></ProductionHouse>
      <GenreMovieList></GenreMovieList>

      <main>
        <Banner></Banner>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
