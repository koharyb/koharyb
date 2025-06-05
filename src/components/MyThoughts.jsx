import React, { useState } from "react";

const MyThoughts = () => {

  const [expandedSections, setExpandedSections] = useState([false, false, false]);


  const toggleReadMore = (index) => {
    setExpandedSections((prev) =>
      prev.map((expanded, i) => (i === index ? !expanded : expanded))
    );
  };


  const sections = [
    {
      title: "FREAKING USB-C connector!!!",
      text: `You know it... Maybe a hundred devices with a USB-C port and it
        freaking doesn’t work again! It’s hard to believe it, but we all
        worshipped the beloved USB port. The holy grail for all of us the
        masses of unworthy peasants. A piece of technology that was supposed to
        pushed us in to a new tech utopia. A mass of indoctrinated people
        from all around the globe... a melting pot of nations... Sure!!! And
        here I am, in a small patch of land somewhere beneath the Carpathian
        Mountains, just me. An exhausted individual, overwhelmed by the insane
        power of the government Moloch breathing down my neck. A humiliated,
        worn-down creature sitting in the corner with his low-end Lenovo laptop,
        spitting sulfur in every direction, trying to catch some faint signal of
        normality from the surrounding ether... But no. I have screwed USB-C port
        here constantly plugging and unpluging. Never mind. Maybe next time.`,
    },
    {
      title: "Dont forget on the terminal restart :)",
      text: `Ok ok, don’t be hasty, and remember: never forget to restart your
        terminal session after updates or some installs... Yes, I am that dumb
        guy who tried to set up a new project in Godot and spend 3 hours
        debugging, only to realize (once again) I did not restart the terminal
        session. This must be the 69th time this year... So, you know, the
        classic scene followed — me rolling on the floor, tearing my hair out,
        completely blind to the problem that was right under my nose. Ok, never
        mind. Just another tantrum in my eternal struggle with the universe. But
        don’t worry, Boris — we will get there. Just remember: Do NOT forget to
        restart your terminal session! And yes, send that laptop in for repair —
        that freaking USB port is driving you mad!`,
    },
    {
      title: "Just buy a old ThinkPad!",
      text: `Okay, it’s 1:30 in the morning. I can’t sleep again, and my rachitic
        fingers are hovering over the keyboard with an undeniable need to
        release another thought into the endless spaces of the internet. So,
        let’s head back to the start of this week. It happened again... Another
        laptop has died in my hands. Another poor silicon soul melted under the
        unavoidable might of my own greatness... or smallness—depends who you
        ask. Aaaach, I think this makes it the 11th or 12th laptop I’ve
        destroyed during my career as a Robot Destroyer. Of course, the problem
        was that freakin' USB-C port. Never mind, Boris. Just breathe. It’s
        gonna get better—I promise. Okay, but back to the topic. I needed to
        finish some work ASAP, so I couldn’t wait for the all-mighty sillicon-God (my
        main laptop) to return from the tech heavens. I needed a fast, reliable
        replacement. So, I visited one of our local used hardware online shops.
        And then it happened. I saw him. The HERO of the last decade. One of the
        final champions of the light. The all-mighty, robust, gorgeous, and
        all black... ThinkPad T470. Pure working power. The last true hero of
        upgradability still standing. And just for a ridiculous 140 euros! It
        only had 8GB of RAM. But nothing what a 30-euro upgrade couldn’t solve. :P
        Now, after a quick RAM swap, my hero is under my fingers, purring with
        the satisfied sound of 20GB of RAM. And honestly? I’m quite convinced I
        won’t go back to his younger brother, even when he comes back from the
        SPA. No, really guys... Everyone should own an old ThinkPad!!!`,
    },
  ];

  return (
    <div className="m-4 animate-slideUp mb-10">
      <h2 className="text-[#f8f9fa] font-bold text-2xl mb-6">My Thoughts</h2>

      {sections.map((section, i) => {
        const isExpanded = expandedSections[i];

        return (
          <div key={i} className="mb-10">
            <h3 className="text-[#f8f9fa] font-bold text-xl">{section.title}</h3>
            <p
              className={`text-white ${
                isExpanded ? "" : "line-clamp-3 md:line-clamp-1"
              } transition-all duration-300`}
            >
              {section.text}
            </p>
            <button
              onClick={() => toggleReadMore(i)}
              className="text-blue-400 mt-2 hover:underline focus:outline-none"
            >
              {isExpanded ? "Read less..." : "Read more..."}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MyThoughts;
