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
        className,
        clsx("max-w-6xl mx-auto", {
          ["py-20"]: pad,
        })
      )}
    >
      {children}
    </div>
  );
};
