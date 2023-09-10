export const Header: React.FC<React.ComponentPropsWithoutRef<'header'>> = ({children})=> {
    return <div className="text-tb-black text-3xl md:text-4xl lg:text-4.5xl py-2 font-medium leading-[44.85px] md:leading-[50.8px]">{children}</div>
}