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
    <div className="mt-[40vh] animate-slideUp w-full">
      <h2 className="text-4xl text-white underline m-4 font-bold ">HARDSKILLS:</h2>
      <div
        className="CardsContainer flex flex-col justify-center items-center gap-4 mb-10  m-4
      lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:gap-5 lg:p-10 xl:p-25"
      >
        <div className="bg-[#ffffff]">
          <img src={reactIcon} alt="" className="w-full h-full" />
        </div>
        <div className="bg-[#ffffff]">
          <img src={tailwindIcon} alt="" className="w-full h-full" />
        </div>
        <div className="bg-[#ffffff]">
          <img src={javascriptIcon} alt="" className=" w-full h-full" />
        </div>
        <div className="bg-[#ffffff]">
          <img src={cssIcon} alt="" className=" w-full h-full" />
        </div>
        <div className="bg-[#ffffff]">
          <img src={htmlIcon} alt="" className="  w-full h-full" />
        </div>
        <div className="bg-[#ffffff]">
          <img src={linuxIcon} alt="" className=" w-full h-full" />
        </div>
        <div className="bg-[#ffffff]">
          <img src={terminalIcon} alt="" className=" w-full h-full" />
        </div>
        <div className="bg-[#ffffff]">
          <img src={gitIcon} alt="" className=" w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hardskills;
