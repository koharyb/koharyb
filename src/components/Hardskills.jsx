import React from "react";
import reactIcon from "../assets/react.svg";
import tailwindIcon from "../assets/tailwind.svg";
import javascriptIcon from "../assets/javascript.svg";
import cssIcon from "../assets/css.svg";
import htmlIcon from "../assets/html.svg";
import linuxIcon from "../assets/linux.svg";
import terminalIcon from "../assets/terminal.svg";
import gitIcon from "../assets/git.svg";

const icons = [
  { src: reactIcon, alt: "React", description: "React" },
  { src: tailwindIcon, alt: "Tailwind", description: "Tailwind" },
  { src: javascriptIcon, alt: "Javascript" ,description: "Javascript" },
  { src: cssIcon, alt: "Css" , description: "Css" },
  { src: htmlIcon, alt: "Html" ,description: "Html" },
  { src: linuxIcon, alt: "Linux" ,description: "Linux" },
  { src: terminalIcon, alt: "Terminal" ,description: "Terminal" },
  { src: gitIcon, alt: "Git" ,description: "Git" },
];

const Hardskills = () => {
  return (
    <div className="mt-[40vh] lg:mt-[10vh] animate-slideUp w-full flex flex-col items-center">
      <div className="w-full lg:w-3/4 lg:px-10">
        <h2 className="text-4xl text-[#f8f9fa] font-bold mb-4 ml-2 ">
          HARDSKILLS
        </h2>

        <div
          className="CardsContainer grid grid-cols-1 gap-4 mb-10
          md:grid-cols-4 md:grid-rows-2 lg:gap-5"
        >
          {icons.map((icon, index) => (
            <div key={index} className="bg-[#f8f9fa] hover:bg-[#ced4da] m-2 md:m-0 relative ">
              <img src={icon.src} alt={icon.alt} className="w-full h-full" />
              {/* <p className="absolute bottom-1 left-2 text-2xl font-bold  text-[#0a0a0a] ">{icon.description}</p> */}
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Hardskills;
