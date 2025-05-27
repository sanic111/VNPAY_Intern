import React from "react";
import disney from "../../assets/Images/disney.png";
import marvel from "../../assets/Images/marvel.png";
import nationalG from "../../assets/Images/nationalG.png";
import pixar from "../../assets/Images/pixar.png";
import starwar from "../../assets/Images/starwar.png";

import starwarV from "../../assets/Videos/star-wars.mp4";
import disneyV from "../../assets/Videos/disney.mp4";
import marvelV from "../../assets/Videos/marvel.mp4";
import nationalGeographicV from "../../assets/Videos/national-geographic.mp4";
import pixarV from "../../assets/Videos/pixar.mp4";

function ProductionHouse() {
  const ProductionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },

    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: nationalG,
      video: nationalGeographicV,
    },
    {
      id: 5,
      image: starwar,
      video: starwarV,
    },
  ];
  return (
    <div className="flex w-full gap-5 overflow-x-auto p-2 px-5 md:px-16">
      {ProductionHouseList.map((item) => (
        <div
          key={item.id}
          className="relative cursor-pointer rounded-lg border-[2px] border-gray-400 shadow-xl shadow-gray-800 transition-all duration-75 ease-in-out hover:scale-100"
        >
          <img src={item.image} alt="" className="z-[1] w-full" />

          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute left-0 top-0 z-0 h-full w-full rounded-md object-cover opacity-0 hover:opacity-50"
          ></video>
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
