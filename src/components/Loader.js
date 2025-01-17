import React from 'react';

function Loader() {
  return (
    <div className='bg-white flex flex-col justify-center items-center min-h-screen'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="195"
        height="195"
        style={{ shapeRendering: 'auto', display: 'block', background: 'transparent' }}
      >
        <g>
          <path
            stroke="none"
            fill="#043695"
            d="M11 50A39 39 0 0 0 89 50A39 42.4 0 0 1 11 50"
          >
            <animateTransform
              values="0 50 51.7;360 50 51.7"
              keyTimes="0;1"
              repeatCount="indefinite"
              dur="1s"
              type="rotate"
              attributeName="transform"
            ></animateTransform>
          </path>
        </g>
      </svg>
      <p className='text-black'>Loading ...</p>
    </div>
  );
}

export default Loader;
