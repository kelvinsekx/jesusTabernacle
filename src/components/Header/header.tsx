import { twMerge } from "tailwind-merge"

export const Header: React.FC<React.ComponentPropsWithoutRef<'header'>> = ({children, className})=> {
    return <div className={twMerge("text-tb-black text-3xl md:text-4xl lg:text-4.5xl py-2 font-extrabold leading-[40.85px] md:leading-[50.8px] tracking-tight", className)}>{children}</div>
}