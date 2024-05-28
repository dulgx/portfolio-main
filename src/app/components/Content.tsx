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
    <div className=" w-1/3 flex flex-col items-start mr-10 text-white overflow-y-hidden">
      {content === "info" && (
        <div className=" min-w-96">
          <p className=" font-light">
            I am currently expanding my skill set by learning front-end
            development. I am now seeking a developer role where I can apply my
            new skills, contribute to innovative projects, and continue my
            professional growth in the tech industry.
          </p>
          <div className="mt-10">
            <ul className="my-3">
              <li className=" text-lg my-2">Professional Experience:</li>
              <li className="text-sm font-light">
                IT Specialist - Sendly NBFI
              </li>
              <li className="text-sm font-light">April 2023 - Present</li>

              <ul className="my-2 text-sm font-light">
                <li>
                  ○ Administer and manage Office 365, including user accounts,
                  email services, and collaboration tools.
                </li>
                <li>
                  ○ Provide technical support and troubleshooting for hardware
                  and software issues.
                </li>
                <li>
                  ○ Administer Polaris and Odoo financial systems, including
                  creating new user accounts for new employees and deleting
                  accounts for departing employees.
                </li>
              </ul>
            </ul>
            <div className="my-5">
              <h2 className=" text-lg my-2">
                Education & Professional Development:
              </h2>
              <p className="text-sm">National University of Mongolia</p>
              <p className="text-sm">Bachelor's Degree in Electronics - 2020</p>
              <ul className=" text-sm mt-2 font-light">
                <li>
                  ○ Developed a strong foundation in electronic systems and
                  circuit design. Discovered a passion for coding and started
                  learning the C programming language.
                </li>
                <li>
                  ○ Completed projects that combined electronics and
                  programming, solidifying my interest in software development.
                </li>
              </ul>
            </div>
            <div className="my-5 font-light">
              <h1 className="text-sm">
                Yu language Academy- Japanese Language{" "}
              </h1>
              <p className="text-sm">Tokyo, Japan | 2021-2023</p>
              <ul className="text-sm mt-2">
                <li>○ Learned Japanese language while living in Japan.</li>
                <li>
                  ○ Achieved JLPT N2 level certificate, demonstrating advanced
                  proficiency in Japanese.
                </li>
              </ul>
            </div>
          </div>
        </div>
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
