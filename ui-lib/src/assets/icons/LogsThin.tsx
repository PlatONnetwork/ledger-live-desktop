import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LogsThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.87988 12.6H21.1199V12.12H2.87988V12.6ZM2.87988 18.12H16.3199V17.64H2.87988V18.12ZM2.87988 7.8L4.43988 6.84L2.87988 5.88V7.8ZM6.95988 7.08H21.1199V6.6H6.95988V7.08Z"
        fill={color}
      />
    </svg>
  );
}

export default LogsThin;
