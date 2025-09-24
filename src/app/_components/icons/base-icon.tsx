import { SvgIcon } from "./icon.types";

export const BaseIcon: React.FC<SvgIcon> = ({
  color = "currentColor",
  width = 24,
  height = 24,
  strokeWidth = "1.5",
  viewBox = "0 0 24 24",
  children,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox={viewBox}
      width={width}
      height={height}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={color}
      strokeWidth={strokeWidth}
      {...rest}
    >
      {children}
    </svg>
  );
};
