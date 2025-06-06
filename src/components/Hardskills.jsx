import React from "react";
import ReactIcon from "./icons/hardskills/ReactIcon.jsx";
import Tailwindcss from "./icons/hardskills/Tailwind.jsx";
import Javascript from "./icons/hardskills/Javascript.jsx";
import Css from "./icons/hardskills/Css.jsx";
import Html from "./icons/hardskills/Html.jsx";
import Linux from "./icons/hardskills/Linux.jsx";
import Terminal from "./icons/hardskills/Terminal.jsx";
import Git from "./icons/hardskills/Git.jsx";


const icons = [
  { component: ReactIcon, alt: "React", description: "React", hoverColor:"hover:text-[#00d8ff]"  },
  { component: Javascript, alt: "Javascript" ,description: "Javascript" ,hoverColor:"hover:text-[#f7df1e]" },
  { component: Css, alt: "Css" , description: "Css", hoverColor:"hover:text-[#663399]" },
  { component: Html, alt: "Html" ,description: "Html" , hoverColor:"hover:text-[#e34f26]" },
  { component: Linux, alt: "Linux" ,description: "Linux", hoverColor:"hover:text-[#ffcc33]" },
  { component: Terminal, alt: "Terminal" ,description: "Terminal" ,hoverColor:"hover:text-[#666666]" },
  { component: Git, alt: "Git" ,description: "Git" ,hoverColor:"hover:text-[#f34f29]" },
  { component: Tailwindcss, alt: "Tailwind", description: "Tailwind", hoverColor:"hover:text-[#06b6d4]" },
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
