import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header-sec w-full h-[100px] fixed z-80 flex items-center gap-4 justify-between text-white px-20">
      {/* logo  */}
      <h2>Logo</h2>
      {/* menu  */}
      <div className="flex items-center gap-4">
        <a href="#about-sec">Hero</a>
        <Link to="about">about</Link>
        <a href="#">works</a>
      </div>
      {/* socials  */}
      <a href="#socials">Socials</a>
    </div>
  );
};
