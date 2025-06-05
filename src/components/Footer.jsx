import React from "react";
import Phone from "./icons/footer/Phone.jsx";
import Email from "./icons/footer/Email.jsx";
import Linkedin from "./icons/footer/Linkedin.jsx";
import Discord from "./icons/footer/Discord.jsx";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-full bg-[#caf76f] p-4 animate-slideUp flex flex-col">
        <h2 className="text-[#000000] text-2xl font-bold">Contacts</h2>
        <div className="mt-10">
          <div className="border-b-2 flex flex-row ">
            <Phone className="w-10 h-10"/>
            <p className="">+421905670063</p>
          </div>
          <div className="border-b-2 flex flex-row gap-1">
            <Email className="w-10 h-10"/>
            <a href="mailto:koharyb@gmail.com" className="">koharyb@gmail.com</a>
          </div>
          <div className="border-b-2 flex flex-row">
            <Linkedin className="w-10 h-10"/>
            <a href="https://www.linkedin.com/in/boris-koh%C3%A1ry-587338196/" target="_blank" rel="noopener noreferrer" className="">linkedin.com/in/boris-koháry</a>
          </div>
          <div className="border-b-2 flex flex-row">
            <Discord className="w-10 h-10"/>
            <p className="">atharis7590</p>
          </div>
        </div>

        <div className="mt-96 flex justify-center">
          <h2 className="font-bold">© {new Date().getFullYear()} — Kohary Boris | Frontend Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
