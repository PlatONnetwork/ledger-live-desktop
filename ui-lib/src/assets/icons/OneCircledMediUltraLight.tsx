import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function OneCircledMediUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.432 12.312V16.464H13.272V7.584H11.76L8.61601 10.512V11.568L11.904 8.496H12.432V12.312ZM5.76001 21H18.24V20.16H5.76001V21ZM5.76001 3.84H18.24V3H5.76001V3.84Z"
        fill={color}
      />
    </svg>
  );
}

export default OneCircledMediUltraLight;
