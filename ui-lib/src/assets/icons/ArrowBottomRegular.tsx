import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowBottomRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21.3721L18.624 14.7241L17.664 13.7401L14.352 17.0761C13.824 17.6041 13.272 18.1561 12.744 18.7321V2.62805H11.256V18.7321C10.728 18.1561 10.176 17.6041 9.64798 17.0761L6.33598 13.7401L5.37598 14.7241L12 21.3721Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowBottomRegular;
