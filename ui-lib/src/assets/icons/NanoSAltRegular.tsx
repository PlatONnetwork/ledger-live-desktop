import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoSAltRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8681 19.848L4.81212 9.76803L8.41212 6.19203L18.4681 16.272C19.0681 16.824 19.2841 17.472 19.2841 18.12C19.2841 19.536 18.1561 20.664 16.7401 20.664C16.0921 20.664 15.4441 20.424 14.8681 19.848ZM2.72412 9.76803L13.1401 20.184V21.84H20.4361V11.928H21.2761V9.48003H20.4361V6.74403H21.2761V4.29603H20.4361V2.16003H13.3081V9.00003L8.38812 4.10403L2.72412 9.76803ZM15.3481 18.12C15.3481 18.864 15.9481 19.536 16.7641 19.536C17.5321 19.536 18.1321 18.864 18.1321 18.12C18.1321 17.352 17.5081 16.752 16.7641 16.752C15.9481 16.752 15.3481 17.352 15.3481 18.12Z"
        fill={color}
      />
    </svg>
  );
}

export default NanoSAltRegular;
