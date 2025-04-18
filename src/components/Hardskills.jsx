import React from "react";
import reactIcon from "../assets/react.svg"
import tailwindIcon from "../assets/tailwind.svg"
import javascriptIcon from "../assets/javascript.svg"
import cssIcon from "../assets/css.svg"
import htmlIcon from "../assets/html.svg"
import linuxIcon from "../assets/linux.svg"
import terminalIcon from "../assets/terminal.svg"
import gitIcon from "../assets/git.svg"

const Hardskills = () => {
  return (
    <div className="mt-[40vh] animate-slideUp w-full">

      <div className="CardsContainer flex flex-col justify-center items-center gap-4 mb-10 lg:grid lg:grid-cols-4 lg:grid-rows-3">
        <div className="bg-[#c8c1c1] w-[30vh] h-[30vh] object-cover">
          <img src={reactIcon} alt="" className="image object-cover" />
        </div>
        <div className="bg-[#c8c1c1] w-[30vh] h-[30vh]">
          <img src={tailwindIcon} alt="" className="" />
        </div>
        <div className="bg-[#c8c1c1] w-[30vh] h-[30vh]">
          <img src={javascriptIcon} alt="" className="" />
        </div>
        <div className="bg-[#c8c1c1] w-[30vh] h-[30vh]">
          <img src={cssIcon} alt="" className="" />
        </div>
        <div className="bg-[#c8c1c1] w-[30vh] h-[30vh]">
          <img src={htmlIcon} alt="" className="" />
        </div>
        <div className="bg-[#c8c1c1] w-[30vh] h-[30vh]">
          <img src={linuxIcon} alt="" className="" />
        </div>
        <div className="bg-[#c8c1c1] w-[30vh] h-[30vh]">
          <img src={terminalIcon} alt="" className="" />
        </div>
        <div className="bg-[#c8c1c1] w-[30vh] h-[30vh]">
          <img src={gitIcon} alt="" className="" />
        </div>

      </div>
    </div>
  );
};

export default Hardskills;
