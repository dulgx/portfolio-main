import React, { useEffect } from "react";
import image1 from "../../../public/album/20231020_4.jpg";
import image2 from "../../../public/album/87134ECC-B4D2-4E9B-A9B7-BF9B7319CE21_1_105_c.jpeg";
import image3 from "../../../public/album/AEBFFF7A-12D9-4CFD-A428-43C39AB8B50F_1_105_c.jpeg";
import image4 from "../../../public/album/_DSC1117.ARW.jpg";
import Image from "next/image";
import { gsap } from "gsap";

interface ContentProps {
  content: string;
}

const Content: React.FC<ContentProps> = ({ content }) => {
  return (
    <div className=" w-1/3 flex flex-col items-center mr-10 text-white overflow-y-auto">
      {content === "info" && (
        <p>
          Hello, my name is [Your Name], and I'm thrilled to have the
          opportunity to introduce myself. I come from a diverse background,
          blending elements of [mention your cultural or ethnic background] with
          experiences from [mention any significant places you've lived or
          traveled]. My journey through life has been guided by a deep curiosity
          and a passion for [mention your interests or areas of expertise].
          Professionally, I've delved into [mention your field or industry],
          where I've honed my skills in [mention specific skills or areas of
          expertise]. Beyond work, I find joy in [mention your hobbies or
          activities you enjoy]. One of my core values is [mention a core value
          or belief that guides you]. I thrive in environments that foster
          collaboration and creativity, where I can contribute my unique
          perspective and learn from others. As someone who values growth and
          learning, I'm always seeking new opportunities to expand my horizons
          and make a positive impact. I look forward to connecting with each of
          you and exploring the possibilities ahead together
        </p>
      )}
      {content === "projects" && <ProjectLinks />}
      {content === "photo" && <PhotoAlbum />}
      {content === "playlist" && <Playlist />}
    </div>
  );
};

export default Content;

const ProjectLinks = () => {
  return (
    <div>
      <ul>
        <li>SENDLY Intranet</li>
        <li>STOCKLAB WEB</li>
        <li>FRONT-END Mentor Projects</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

const PhotoAlbum = () => {
  return (
    <div className="flex flex-col absolute z-10 ">
      <Image
        src={image1}
        alt="Image 1"
        className=" w-72 h-52 -left-80 absolute rotate-1"
      />
      <Image
        src={image2}
        alt="Image 2"
        className="w-80 h-60 top-96 absolute -rotate-3"
      />
      <Image
        src={image3}
        alt="Image 3"
        className="w-40 h-60 top-[350px] -left-52 absolute -rotate-3"
      />
      <Image src={image4} alt="Image 4" className=" w-80" />
    </div>
  );
};

const Playlist: React.FC = () => {
  return <div>Playlist</div>;
};
