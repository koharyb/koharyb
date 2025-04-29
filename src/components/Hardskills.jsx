import React from "react";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import javascriptIcon from "../assets/javascript.svg";
import cssIcon from "../assets/css.svg";
import htmlIcon from "../assets/html.svg";
import linuxIcon from "../assets/linux.svg";
import terminalIcon from "../assets/terminal.svg";
import gitIcon from "../assets/git.svg";

const Hardskills = () => {
  return (
    <div className="mt-[40vh] lg:mt-[10vh] animate-slideUp w-full flex flex-col items-center">
      <div className="w-full lg:w-3/4 lg:px-10">
        <h2 className="text-4xl text-white font-bold mb-4">HARDSKILLS</h2>

        <div
          className="CardsContainer grid grid-cols-1 gap-4 mb-10
          lg:grid-cols-4 lg:grid-rows-2 lg:gap-5"
        >
          <div className="bg-[#ffffff]">
            <img src={reactIcon} alt="" className="w-full h-full" />
          </div>
          <div className="bg-[#ffffff]">
            <img src={tailwindIcon} alt="" className="w-full h-full" />
          </div>
          <div className="bg-[#ffffff]">
            <img src={javascriptIcon} alt="" className="w-full h-full" />
          </div>
          <div className="bg-[#ffffff]">
            <img src={cssIcon} alt="" className="w-full h-full" />
          </div>
          <div className="bg-[#ffffff]">
            <img src={htmlIcon} alt="" className="w-full h-full" />
          </div>
          <div className="bg-[#ffffff]">
            <img src={linuxIcon} alt="" className="w-full h-full" />
          </div>
          <div className="bg-[#ffffff]">
            <img src={terminalIcon} alt="" className="w-full h-full" />
          </div>
          <div className="bg-[#ffffff]">
            <img src={gitIcon} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hardskills;
