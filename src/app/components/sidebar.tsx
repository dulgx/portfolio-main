import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface SidebarProps {
  setContent: (content: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setContent }) => {
  const elementRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { x: -200, duration: 1 },
      { x: 0, duration: 1 }
    );
  });

  return (
    <div className="grid text-white h-full w-1/4">
      <div className="flex flex-col gap-2 mt-5 " ref={elementRef}>
        <span className=" text-5xl">Dulguun Purevtseren</span>
        <span>Front-End Enthusiast</span>
        <p className=" font-light">
          Enjoys creating user-friendly and visually appealing websites using
          the latest web technologies.
        </p>
      </div>
      <div className=" items-center">
        <ul className="grid gap-4 ">
          <li
            className="cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              setContent("info");
            }}
          >
            Info
          </li>
          <li
            className="cursor-pointer"
            onClick={(event) => {
              event.preventDefault();
              setContent("projects");
            }}
          >
            Projects
          </li>
          <li className="cursor-pointer" onClick={() => setContent("photo")}>
            PhotoAlbum
          </li>
          <li className="cursor-pointer" onClick={() => setContent("playlist")}>
            {" "}
            Playlist
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
