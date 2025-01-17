import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LedgerBlueRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.22005 22.2001H17.9401C19.0441 22.2001 19.8601 21.3841 19.8601 20.2801V8.40005H20.7001V5.04005H19.8601V3.72005C19.8601 2.61605 19.0441 1.80005 17.9401 1.80005H5.22005C4.11605 1.80005 3.30005 2.61605 3.30005 3.72005V20.2801C3.30005 21.3841 4.11605 22.2001 5.22005 22.2001ZM4.76405 20.3281V3.67205C4.76405 3.40805 4.93205 3.26405 5.17205 3.26405H17.9881C18.2521 3.26405 18.3961 3.40805 18.3961 3.67205V20.3281C18.3961 20.5921 18.2521 20.736 17.9881 20.736H5.17205C4.93205 20.736 4.76405 20.5921 4.76405 20.3281ZM6.42005 19.08H16.7401V4.92005H6.42005V19.08ZM7.71605 17.784V6.21605H15.444V17.784H7.71605Z"
        fill={color}
      />
    </svg>
  );
}

export default LedgerBlueRegular;
