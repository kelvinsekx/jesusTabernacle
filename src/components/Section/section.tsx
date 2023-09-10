import { twMerge } from "tailwind-merge"

export const Section : React.FC<React.ComponentPropsWithoutRef<'section'>> = ({children, className})=> <section className={twMerge("m-auto text-center w-[80%] md:w-[50%] pb-8", className)}>
    {children}
</section>