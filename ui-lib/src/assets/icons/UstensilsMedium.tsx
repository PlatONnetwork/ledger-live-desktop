import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function UstensilsMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.8881 11.9999V21.8399H8.8081V12.0239C10.7281 11.5679 12.1201 9.86391 12.1201 7.91991V2.39991H10.3201V7.91991C10.3201 9.07191 9.7441 9.93591 8.8081 10.2719V2.39991H6.8881V10.2719C5.9761 9.91191 5.4001 9.04791 5.4001 7.91991V2.39991H3.6001V7.91991C3.6001 9.86391 4.9921 11.5679 6.8881 11.9999ZM13.9201 16.7999H18.4801V21.8399H20.4001V2.15991C16.8001 2.15991 13.9201 5.03991 13.9201 8.63991V16.7999ZM15.8401 15.1199V8.63991C15.8401 6.43191 16.8481 4.84791 18.4801 4.19991V15.1199H15.8401Z"
        fill={color}
      />
    </svg>
  );
}

export default UstensilsMedium;
