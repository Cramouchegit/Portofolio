import { FC } from "react";
import { RiComputerLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { useAppSelector } from "../redux/reduxHooks";

const Tools: FC = () => {
  const navHeight = useAppSelector((store) => store.navHeight);

  return (
    <section
      id="tools"
      className="space-y-14 px-5 sm:px-10 md:px-24 mt-16"
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-8 leading-tight tracking-tighter">
        Tools I use
      </h1>
      <div className="text-white grid md:grid-cols-2 lg:grid-cols-2 gap-10 py-10">
        <div className="glassmorphism rounded-lg py-8 px-16 flex flex-col flex-auto h-85 space-y-6 items-start transition-all hover:outline-4">
          <FiArchive color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            Web Development
          </h1>
          <h2>
            I have used or am currently using the following for frontend webdev:
          </h2>
          <ul className="list-disc text-white-300">
            <li>&emsp;HTML, CSS, JavaScript (TypeScript is much better)</li>
            <li>&emsp;Bootstrap</li>
            <li>&emsp;TailwindCSS</li>
            <li>&emsp;Vue</li>
            <li>&emsp;ReactJS, NextJS</li>
            <li>&emsp;NODE JS</li>
          </ul>
        </div>
        <div className="glassmorphism rounded-lg py-8 px-16 flex flex-col flex-auto h-85 space-y-6 items-start transition-all hover:outline-4">
          <RiComputerLine color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            Tools Web Dev & Operating Systems
          </h1>
          <h2>
            I have used or am currently using the following web development
            tools & operating systems:
          </h2>
          <ul className="list-disc text-white-300">
            <li>Shell</li>
            <li>GIT</li>
            <li>Github</li>
            <li>Postman</li>
            <li>Figma</li>
            <li>Laragon & PhpMyAdmin</li>
            <li>Window, Linux (Ubuntu), MacOS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tools;
