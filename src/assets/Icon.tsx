import * as React from "react";

interface IconProps {
  width: number;
  height: number;
}

const Icon = (props: IconProps) => (
  <svg
    viewBox="0 0 148 165"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M117.613 139.554a68.487 68.487 0 0 1-37.473 6.971 68.494 68.494 0 0 1-60.162-83.044 68.5 68.5 0 0 1 89.692-49.712"
      stroke="#000"
      strokeWidth={6}
    />
    <path
      d="m81.5 78 30.58 22c-6.797 9.683-17.96 16-30.58 16C60.79 116 44 98.987 44 78s16.79-38 37.5-38c12.62 0 23.783 6.317 30.58 16 4.42-3-30.58 22-30.58 22Z"
      fill="#000"
    />
  </svg>
);

export default Icon;
