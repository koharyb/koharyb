import React from "react";

const Phone = ({ className }) => {
  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#000000"
      >
        <path d="M8 25a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4c0-4 4-4 8-4s8 0 8 4a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4c0-10-4-14-24-14S8 15 8 25z" />
        <circle cx="32" cy="37" r="8" />
        <path d="m16 29-3.91 11.73A9.32 9.32 0 0 0 20.94 53h22.12a9.32 9.32 0 0 0 8.85-12.27L48 29" />
      </svg>
    </div>
  );
};

export default Phone;
