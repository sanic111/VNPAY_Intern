import React, { useState } from "react";
import logo from "../../assets/icons/logo.png";
import {
  HiHome,
  HiStar,
  HiPlayCircle,
  HiTv,
  HiMagnifyingGlass,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./component/HeaderItems";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCHLIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center gap-8">
        <img
          src={logo}
          className="w-[80px] object-cover md:w-[115px]"
          alt="logo"
        />
        <div className="hidden gap-8 md:flex">
          {menu.map((item) => (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Hiện 3 icon đầu */}
        <div className="flex gap-5 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItems key={item.name} name={""} Icon={item.icon} />
              ),
          )}

          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItems name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div className="absolute z-20 mt-3 border-[1px] border-gray-700 bg-[#121212] p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItems
                        key={item.name}
                        name={item.name}
                        Icon={item.icon}
                      />
                    ),
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://i.etsystatic.com/9318667/r/il/8cbb89/1084694473/il_1080xN.1084694473_pic2.jpg"
        className="w-[40px] rounded-full"
        alt="avatar"
      />
    </div>
  );
};

export default Header;
