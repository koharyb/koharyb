import React from "react";

const Work = () => {
  return (
    <div className="lg:max-w-[200vh] lg:flex lg:items-center lg:justify-center">
      <div className="flex flex-col m-4 mb-10 animate-slideUp">
        <h2 className="text-4xl text-[#fdf9f9] font-bold underline">
          RECENT WORK:
        </h2>

        <div className="border-b-2 border-[#353232] lg:pb-8">
          <a href="" className="text-[#fdf9f9]">
            www.elsyslevice.sk
          </a>
        </div>
        <div className="border-b-2 border-[#353232] lg:pb-8">
          <a href="" className="text-[#fdf9f9]">
            www.vinecko.sk
          </a>
        </div>
        <div className="border-b-2 border-[#353232] lg:pb-8">
          <a href="" className="text-[#fdf9f9]">
            www.lakovnalevice.sk
          </a>
        </div>
        <div className="border-b-2 border-[#353232] lg:pb-8">
          <a href="" className="text-[#fdf9f9]">
            www.jkcatering.net
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
