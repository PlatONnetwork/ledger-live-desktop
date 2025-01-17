import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowToBottomMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0001 17.0401L17.4961 11.5441L16.3201 10.3681L14.0881 12.5761C13.7041 12.9841 13.2961 13.4161 12.9121 13.8481V3.12012H11.0881V13.8241C10.7041 13.3921 10.2961 12.9601 9.9121 12.5761L7.7041 10.3681L6.5041 11.5441L12.0001 17.0401ZM3.6001 20.8801H20.4001V18.9601H3.6001V20.8801Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowToBottomMedium;
