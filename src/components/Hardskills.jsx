import React from "react";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import javascriptIcon from "../assets/javascript.svg";
import cssIcon from "../assets/css.svg";
import htmlIcon from "../assets/html.svg";
import linuxIcon from "../assets/linux.svg";
import terminalIcon from "../assets/terminal.svg";
import gitIcon from "../assets/git.svg";
import ReactIcon from "./icons/ReactIcon.jsx";
import Tailwindcss from "./icons/Tailwind.jsx";
import Javascript from "./icons/Javascript.jsx";
import Css from "./icons/Css.jsx";
import Html from "./icons/Html.jsx";
import Linux from "./icons/Linux.jsx";
import Terminal from "./icons/Terminal.jsx";
import Git from "./icons/Git.jsx";

const icons = [
  { component: ReactIcon, alt: "React", description: "React", hoverColor:"hover:text-[#00d8ff]"  },
  { component: Tailwindcss, alt: "Tailwind", description: "Tailwind", hoverColor:"hover:text-[#06b6d4]" },
  { component: Javascript, alt: "Javascript" ,description: "Javascript" ,hoverColor:"hover:text-[#f7df1e]" },
  { component: Css, alt: "Css" , description: "Css", hoverColor:"hover:text-[#663399]" },
  { component: Html, alt: "Html" ,description: "Html" , hoverColor:"hover:text-[#e34f26]" },
  { component: Linux, alt: "Linux" ,description: "Linux", hoverColor:"hover:text-[#ffcc33]" },
  { component: Terminal, alt: "Terminal" ,description: "Terminal" ,hoverColor:"hover:text-[#666666]" },
  { component: Git, alt: "Git" ,description: "Git" ,hoverColor:"hover:text-[#f34f29]" },
];

const Hardskills = () => {
  return (
    <div className="mt-[40vh] lg:mt-[10vh] animate-slideUp w-full flex flex-col items-center">
      <div className="w-full lg:w-3/4 lg:px-10">
        <h2 className="text-4xl text-[#f8f9fa] font-bold mb-4 ml-4 ">
          HARDSKILLS
        </h2>

        <div
          className="CardsContainer grid grid-cols-2 gap-2 mb-10 ml-2 mr-2
          md:grid-cols-4 md:grid-rows-2 lg:gap-5"
        >
          {icons.map((icon, index) => (
            <div key={index} className={`bg-[#f8f9fa] ${icon.hoverColor} m-2 md:m-0 relative`}>
              <icon.component alt={icon.alt} className="w-full h-full" />
             
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Hardskills;
