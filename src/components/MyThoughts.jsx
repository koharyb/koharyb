import React, { useState } from "react";

const MyThoughts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="m-4">
      <h2 className="text-white font-bold text-2xl">My Thoughts</h2>
      <h3 className="text-white font-bold text-xl">FREAKING USB!!!</h3>
      <p className={`text-white ${isExpanded ? '' : 'line-clamp-3'} transition-all duration-300`}>
        You know it... A maybe hundred device with USB-C port and its freaking
        does not work again!... its hard to believed it but worshiped all
        bellowed USB port. A holy grail of for all of us masses of unworthi
        peasants, piece of technollogy which meant a new era for all of us
        happy cityzens. A mass of indoctrinated people from all around a
        globe... melting pod of the nations... Sure !!! And here in small
        piece of land somewhere under Carpathian mountains its me! a Exhausted
        individum. overgrowned by the insane power of that Goverment Moloch
        over my shoulders. Exhausted mumiliated small creature sitting in the
        corner with his low end Lenovo laptop in his hands and spitting a
        sulfur on all around trying to catch some of link of normalize from
        surrounding etherum... But no i have only a usb-C here... Nevermind
        maybe next time.
      </p>
      <button
        onClick={toggleReadMore}
        className="text-blue-400 mt-2 hover:underline focus:outline-none"
      >
        {isExpanded ? "Read less..." : "Read more..."}
      </button>
    </div>
  );
};

export default MyThoughts;
