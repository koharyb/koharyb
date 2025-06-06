import React from "react";

const Terminal = ({className}) => {
  return (
    <div>
      <svg
        className={`fill-current ${className}`}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.792725 12.2929L5.08562 8.00002L0.792725 3.70712L2.20694 2.29291L7.91405 8.00002L2.20694 13.7071L0.792725 12.2929Z"
          fill="#currenColor"
        />
        <path d="M7.00006 15H15.0001V13H7.00006V15Z" fill="#currentColor" />
      </svg>
    </div>
  );
};

export default Terminal;
