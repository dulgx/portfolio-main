import Image from "next/image";
import Sidebar from "./components/sidebar";
import Content from "./components/Content";

export default function Home() {
  return (
    <main className="bg-custom-image bg-cover bg-center h-screen p-10 flex flex-row">
      <Sidebar />
      <Content />
    </main>
  );
}
