import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full h-full bg-[#caf76f] p-4 animate-slideUp flex flex-col">
        <h2 className="text-[#000000] text-2xl font-bold">Contacts</h2>
        <div className="mt-10">
          <div className="border-b-2 ">
            <p className="">+421905670063</p>
          </div>
          <div className="border-b-2 ">
            <a href="mailto:koharyb@gmail.com" className="">koharyb@gmail.com</a>
          </div>
          <div className="border-b-2 ">
            <a href="https://www.linkedin.com/in/boris-koh%C3%A1ry-587338196/" target="_blank" rel="noopener noreferrer" className="">linkedin.com/in/boris-koháry</a>
          </div>
          <div className="border-b-2 ">
            <p className="">discord: atharis7590</p>
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
