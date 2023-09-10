'use client'
import { MenuIcon, XIcon } from "lucide-react";

type TMenu = {
    toggle: ()=> void
}

export const Menu = ({toggle}: TMenu)=> <MenuIcon className='md:hidden' onClick={toggle}/>
export const Close = ({toggle}: TMenu)=> <XIcon className='md:hidden' onClick={toggle}/>