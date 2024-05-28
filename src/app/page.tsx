"use client";

import Sidebar from "./components/sidebar";
import Content from "./components/Content";
import { useState } from "react";
import { gsap } from "gsap";

export default function Home() {
  const [currentContent, setCurrentContent] = useState<string>("info");
  gsap.set(".ball", { xPercent: -50, yPercent: -50 });

  let xTo = gsap.quickTo(".ball", "x", { duration: 0.6, ease: "power3" }),
    yTo = gsap.quickTo(".ball", "y", { duration: 0.6, ease: "power3" });

  window.addEventListener("mousemove", (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });
  return (
    <main className=" bg-cover bg-center h-screen p-16 flex flex-row justify-between bg-gray-900">
      <Sidebar setContent={setCurrentContent} />
      <Content content={currentContent} />
      <div
        className="ball"
        style={{
          width: "25px",
          height: "25px",
          position: "fixed",
          top: 0,
          left: 0,
          border: "3px solid dodgerblue",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      ></div>
    </main>
  );
}
