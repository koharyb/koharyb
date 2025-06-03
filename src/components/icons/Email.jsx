import React from "react";

const Email = ({ className }) => {
  return (
    <div>
      <svg
        className={`fill-current ${className}`}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <g data-name="Layer 2" id="Layer_2">
          <rect x="1" y="10.67" width="62" height="42.33" rx="4.61" ry="4.61" />
          <polyline points="5 16 32 32 59 16" strokeLinecap="round" />
          <line x1="24.91" y1="27.8" x2="5" y2="44" strokeLinecap="round" />
          <line x1="39.09" y1="27.8" x2="59" y2="45" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export default Email;
