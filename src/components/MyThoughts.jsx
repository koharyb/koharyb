import React, { useState } from "react";

const MyThoughts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="m-4 animate-slideUp mb-10">
      <h2 className="text-white font-bold text-2xl">My Thoughts</h2>
      <h3 className="text-white font-bold text-xl">FREAKING USB-C connector!!!</h3>
      <p
        className={`text-white ${
          isExpanded ? "" : "line-clamp-3"
        } transition-all duration-300`}
      >
        You know it... Maybe a hundred devices with a USB-C port — and it
        freaking doesn’t work again! It’s hard to believe it, but we all
        worshipped the beloved USB port. The holy grail for all of us — the
        masses of unworthy peasants — a piece of technology that was supposed to
        usher in a new era for us happy citizens. A mass of indoctrinated people
        from all around the globe... a melting pot of nations... Sure!!! And
        here I am, in a small patch of land somewhere beneath the Carpathian
        Mountains — just me. An exhausted individual, overwhelmed by the insane
        power of the government Moloch breathing down my neck. A humiliated,
        worn-down creature sitting in the corner with his low-end Lenovo laptop,
        spitting sulfur in every direction, trying to catch some faint signal of
        normalcy from the surrounding ether... But no. I have only a USB-C port
        here. Never mind. Maybe next time.
      </p>
      <button
        onClick={toggleReadMore}
        className="text-blue-400 mt-2 hover:underline focus:outline-none mb-10"
      >
        {isExpanded ? "Read less..." : "Read more..."}
      </button>
    </div>
  );
};

export default MyThoughts;
