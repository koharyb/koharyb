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

      <div className="CardsContainer flex flex-col justify-center items-center gap-4 mb-10 lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-0 border-amber-400 border-2">
        <div className="bg-[#ffffff] w-full h-full border-amber-400 border-2">
          <img src={reactIcon} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="bg-[#ffffff] w-full h-full">
          <img src={tailwindIcon} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="bg-[#ffffff] w-full h-full">
          <img src={javascriptIcon} alt="" className="object-contain" />
        </div>  
        <div className="bg-[#ffffff] w-full h-full">
          <img src={cssIcon} alt="" className="object-contain" />
        </div>
        <div className="bg-[#ffffff] w-full h-full">
          <img src={htmlIcon} alt="" className="object-contain" />
        </div>
        <div className="bg-[#ffffff] w-full h-full">
          <img src={linuxIcon} alt="" className="object-contain" />
        </div>
        <div className="bg-[#ffffff] w-full h-full">
          <img src={terminalIcon} alt="" className="object-contain" />
        </div>
        <div className="bg-[#ffffff] w-full h-full">
          <img src={gitIcon} alt="" className="object-contain" />
        </div>

      </div>
    </div>
  );
};

export default Hardskills;
