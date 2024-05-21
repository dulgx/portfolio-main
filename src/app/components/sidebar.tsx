import React from "react";

const Sidebar = () => {
  return (
    <div className="grid text-white h-full w-1/4">
      <div className="flex flex-col gap-2 mt-5">
        <span className=" text-5xl">Dulguun Purevtseren</span>
        <span>Front-End Enthusiast</span>
        <p className=" font-light">
          Enjoys creating user-friendly and visually appealing websites using
          the latest web technologies.
        </p>
      </div>
      <div className=" items-center">
        <ul className="grid gap-4 ">
          <li className="cursor-pointer">Info</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">PhotoAlbum</li>
          <li className="cursor-pointer"> Playlist</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
