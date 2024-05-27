"use client";

import Image from "next/image";
import Sidebar from "./components/sidebar";
import Content from "./components/Content";
import { useState } from "react";

export default function Home() {
  const [currentContent, setCurrentContent] = useState<string>("info");

  return (
    <main className="bg-custom-image bg-cover bg-center h-screen p-16 flex flex-row justify-between">
      <Sidebar setContent={setCurrentContent} />
      <Content content={currentContent} />
    </main>
  );
}
