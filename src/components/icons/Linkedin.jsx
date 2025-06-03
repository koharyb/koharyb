import React from "react";

const Linkedin = ({ className }) => {
  return (
    <div>
      <svg
        className={`fill-current ${className}`}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="15.64" cy="13.46" r="0.75" fill="#000000" />
        <line x1="15.64" y1="16.93" x2="15.64" y2="31.91" />
        <path d="M33.11 31.91v-9.61a5.83 5.83 0 0 0-5.82-5.82 5.83 5.83 0 0 0-5.83 5.82v9.61" />
        <line x1="21.46" y1="22.3" x2="21.46" y2="16.93" />
        <path d="M40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2z" />
      </svg>
    </div>
  );
};

export default Linkedin;
