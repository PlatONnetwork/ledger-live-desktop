import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledCrossSolidThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 20.88C16.9681 20.88 20.8801 16.848 20.8801 12C20.8801 7.032 16.9681 3.12 12.0001 3.12C7.03212 3.12 3.12012 7.032 3.12012 12C3.12012 16.968 7.03212 20.88 12.0001 20.88ZM7.70412 15.96L11.6641 12L7.70412 8.04L8.04012 7.704L12.0001 11.664L15.9601 7.704L16.2961 8.04L12.3361 12L16.2961 15.96L15.9601 16.296L12.0001 12.336L8.04012 16.296L7.70412 15.96Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledCrossSolidThin;
