import { Outlet } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Slider from "./Slider";
import ProductionHouse from "./ProductionHouse";
import GenreMovieList from "./GenreMovieList";
import Footer from "./Footer";
const MainLayout = () => {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header></Header>
      <Slider></Slider>
      <div className="pt-11">
        <ProductionHouse></ProductionHouse>
      </div>
      <GenreMovieList></GenreMovieList>

      <main>
        <Banner></Banner>
        {/* <Outlet /> */}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
