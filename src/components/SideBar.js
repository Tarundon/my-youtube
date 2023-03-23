import React from "react";
import { useSelector } from "react-redux";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <h1 className="p-2">Home</h1>
      <h1 className="p-2">Shorts</h1>
      <h1 className="p-2">Library</h1>
      <h1 className="font-bold my-2">Subscriptions</h1>
      <ul>
        <li>Channel 1</li>
        <li>Channel 2</li>
        <li>Channel 3</li>
      </ul>
      <h1 className="font-bold my-2">Explore</h1>
      <ul className="">
        <li>Trending</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Learning</li>
      </ul>
    </div>
  );
};

export default SideBar;
