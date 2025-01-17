import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ZeroCircledMediMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.7039C14.472 16.7039 15.768 14.8559 15.768 12.0239C15.768 9.16789 14.496 7.34389 12 7.34389C9.52801 7.34389 8.20801 9.19189 8.20801 12.0239C8.20801 14.8559 9.52801 16.7039 12 16.7039ZM5.76001 21.3599H18.24V19.4399H5.76001V21.3599ZM5.76001 4.55989H18.24V2.63989H5.76001V4.55989ZM10.2 13.1519V10.9439C10.2 9.26389 10.704 8.95189 11.976 8.95189C12.696 8.95189 13.176 9.04789 13.464 9.45589L10.2 13.1519ZM10.488 14.6399L13.776 10.9439V13.1759C13.776 14.8319 13.248 15.1439 11.976 15.1439C11.256 15.1439 10.776 15.0479 10.488 14.6399Z"
        fill={color}
      />
    </svg>
  );
}

export default ZeroCircledMediMedium;
