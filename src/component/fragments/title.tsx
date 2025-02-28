import { twClass } from "mogora-ui";
import { HTMLAttributes, ReactNode } from "react";

interface SubTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const SubTitle = ({ children, className, ...props }: SubTitleProps) => {
  return (
    <h2 className={twClass("font-bold tex-xl mt-3", className)} {...props}>
      {children}
    </h2>
  );
};

interface HightLightProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}
export const HightLight = ({
  children,
  className,
  ...props
}: HightLightProps) => {
  return (
    <span
      className={twClass("bg-gray-200 px-2 rounded-md", className)}
      {...props}
    >
      {children}
    </span>
  );
};
