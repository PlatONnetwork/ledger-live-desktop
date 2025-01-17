import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ChristmasUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.544 21.12H12.456V18.168H20.856L16.848 12.6H18.816L12 2.88L5.18404 12.6H7.17604L3.14404 18.168H11.544V21.12ZM4.72804 17.376L8.76004 11.784H6.74404L12 4.296L17.256 11.784H15.264L19.272 17.376H4.72804Z"
        fill={color}
      />
    </svg>
  );
}

export default ChristmasUltraLight;
