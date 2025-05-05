import React from "react";

const Work = () => {
  return (
    <div className="lg:max-w-[200vh] lg:flex lg:items-center lg:justify-center">
      <div className="flex flex-col m-4 mb-10 animate-slideUp lg:w-[1000px]">
        <h2 className="text-4xl text-[#f8f9fa] font-bold lg:mb-10">
          RECENT WORK
        </h2>

        <div className="border-b-2 border-[#353232] lg:pb-8 lg:pt-2">
          <a href="" className="text-[#525252] hover:text-[#f3d9d9] ">
            www.zedolzetor.sk
          </a>
        </div>  
        <div className="border-b-2 border-[#353232] lg:pb-8 lg:pt-2">
          <a href="" className="text-[#525252] hover:text-[#f3d9d9]">
            www.blablablabla.sk
          </a>
        </div>
        <div className="border-b-2 border-[#353232] lg:pb-8 lg:pt-2">
          <a href="" className="text-[#525252] hover:text-[#f3d9d9]">
            www.odpocetfackyteckacom.sk
          </a>
        </div>
        <div className="border-b-2 border-[#353232] lg:pb-8 lg:pt-2">
          <a href="" className="text-[#525252] hover:text-[#f3d9d9]">
            www.husker.net
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
