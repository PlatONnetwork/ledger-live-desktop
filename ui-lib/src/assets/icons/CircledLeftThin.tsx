import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledLeftThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0641 16.344L11.4001 16.008L9.69612 14.304L7.63212 12.24H17.0401V11.76H7.63212L9.69612 9.696L11.4001 7.992L11.0641 7.656L6.72012 12L11.0641 16.344ZM3.12012 12C3.12012 16.968 7.03212 20.88 12.0001 20.88C16.9681 20.88 20.8801 16.848 20.8801 12C20.8801 7.032 16.9681 3.12 12.0001 3.12C7.03212 3.12 3.12012 7.032 3.12012 12ZM3.60012 12C3.60012 7.296 7.29612 3.6 12.0001 3.6C16.7041 3.6 20.4001 7.296 20.4001 12C20.4001 16.584 16.7041 20.4 12.0001 20.4C7.29612 20.4 3.60012 16.704 3.60012 12Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledLeftThin;