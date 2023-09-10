import * as React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type TContainer = {
  pad?: boolean;
};
type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export const Container: React.FC<
  React.PropsWithChildren<TContainer & ContainerProps>
> = ({ children, pad = false, className = "" }) => {
  return (
    <div
      className={twMerge(
        clsx("max-w-6xl mx-auto px-4", {
          ["py-20"]: pad,
        }),
        className
      )}
    >
      {children}
    </div>
  );
};

export const LargeContainer: React.FC<
  React.PropsWithChildren<TContainer & ContainerProps>
> = ({ children, pad = false, className = "" }) => {
  return (
    <div
      className={twMerge(
        className,
        clsx("max-w-[100rem] mx-auto", {
          ["py-20"]: pad,
        })
      )}
    >
      {children}
    </div>
  );
};
