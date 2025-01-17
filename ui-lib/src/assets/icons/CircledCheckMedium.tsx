import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CircledCheckMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 21.3599C17.2561 21.3599 21.3601 17.0879 21.3601 11.9999C21.3601 6.76789 17.2321 2.63989 12.0001 2.63989C6.76814 2.63989 2.64014 6.76789 2.64014 11.9999C2.64014 17.2319 6.76814 21.3599 12.0001 21.3599ZM4.56014 11.9999C4.56014 7.82389 7.82414 4.55989 12.0001 4.55989C16.1761 4.55989 19.4401 7.82389 19.4401 11.9999C19.4401 16.0559 16.1761 19.4399 12.0001 19.4399C7.82414 19.4399 4.56014 16.1759 4.56014 11.9999ZM7.82414 12.1679L11.1841 15.5519L16.8481 9.86389L15.5041 8.51989L11.1841 12.8159L9.16814 10.8239L7.82414 12.1679Z"
        fill={color}
      />
    </svg>
  );
}

export default CircledCheckMedium;
