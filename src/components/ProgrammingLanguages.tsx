import { type ReactNode } from "react";
import { DiDjango } from "react-icons/di";
import { FaAngular, FaCss3, FaHtml5, FaPython, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiAstro,
  SiCsharp,
  SiDotnet,
  SiKotlin,
  SiLinux,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudio,
  SiVisualstudiocode,
  SiWindows11,
} from "react-icons/si";

let keyCount = 100;
const getKey = () => {
  keyCount++;
  return keyCount.toString();
};

const listLanguages: ReactNode[] = [
  <SiLinux key={getKey()} />,
  <SiDotnet key={getKey()} />,
  <FaCss3 key={getKey()} />,
  <FaReact key={getKey()} />,
  <FaPython key={getKey()} />,
  <SiVisualstudio key={getKey()} />,
  <IoLogoJavascript key={getKey()} />,
  <SiWindows11 key={getKey()} />,
  <SiTypescript key={getKey()} />,
  <SiAstro key={getKey()} />,
  <SiTailwindcss key={getKey()} />,
  <FaAngular key={getKey()} />,
  <FaHtml5 key={getKey()} />,
  <DiDjango key={getKey()} />,
  <SiCsharp key={getKey()} />,
  <SiVisualstudiocode key={getKey()} />,
  <SiKotlin key={getKey()} />,
];

const ProgrammingLanguages = () => {
  return (
    <div className="my-24 outline-2 overflow-x-hidden container-anim-running">
      <div className="flex w-max *:min-w-14 *:mx-4 text-5xl md:text-6xl *:md:mx-10  *:lg:mx-8 running-animate opacity-80">
        {listLanguages.map((x) => x)}
        {listLanguages.map((x) => x)}
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
