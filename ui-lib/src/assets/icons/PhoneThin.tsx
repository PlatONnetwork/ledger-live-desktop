import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function PhoneThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.964 20.916L20.916 17.844L16.092 13.5L11.868 17.652C10.812 16.908 9.80398 16.068 8.86798 15.132C7.93198 14.196 7.09198 13.188 6.34798 12.132L10.5 7.90801L6.15598 3.08401L3.08398 6.03602C3.82798 9.49201 5.89198 12.804 8.53198 15.468C11.22 18.132 14.508 20.196 17.964 20.916ZM3.61198 6.18001L6.10798 3.75601L9.82798 7.90801L6.08398 11.724C4.93198 9.99602 4.06798 8.12401 3.61198 6.18001ZM12.276 17.916L16.092 14.172L20.244 17.892L17.82 20.388C15.852 19.932 14.004 19.092 12.276 17.916Z"
        fill={color}
      />
    </svg>
  );
}

export default PhoneThin;
