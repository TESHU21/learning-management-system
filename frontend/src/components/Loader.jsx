import React from "react";

const Loader = () => {
  // Any logic or hooks go here

  // The return statement is necessary to render the JSX
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width=" 60"
      height="40"
      className="block bg-none"
    >
      <g>
        <path
          style={{ transform: "scale(1)", transformOrigin: "50px 50px" }}
          strokeLinecap="round"
          d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
          strokeDasharray="225.7982568359375 30.790671386718742"
          strokeWidth="8"
          stroke="#088d63"
          fill="none"
        >
          <animate
            values="0;256.58892822265625"
            keyTimes="0;1"
            dur="2s"
            repeatCount="indefinite"
            attributeName="stroke-dashoffset"
          />
        </path>
      </g>
    </svg>
  );
};

export default Loader;
