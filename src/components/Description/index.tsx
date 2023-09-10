import { twMerge } from "tailwind-merge"

export const Description: React.FC<React.ComponentPropsWithoutRef<'p'>> = ({children, className})=><p className={twMerge("text-sm leading-[19.12px] md:text-base md:leading-[21.86px] p-1", className)}>
    {children}
</p>