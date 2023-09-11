'use client'
import * as React from 'react'
import Image from "next/image";
import Link from 'next/link'
import { Container } from "@/components/container";
import { GiveDialog } from "../GiveDialog/dialog";
import { Menu, Close } from "./Menu";


import {clsx} from 'clsx'
import { twMerge } from "tailwind-merge";

// clsx(mobile, tab, desk)
export const Navigation = () => {
  const [mobileNavList, setMobileNavList] = React.useState<boolean>(false)

  const toggleNavList = ()=>setMobileNavList((prevProps)=> !prevProps)
  return (
    <Container className="px-1 _h_auto">
      <div className={clsx(
        'flex',
        'md:flex-row',
        "justify-between bg-white text-tb-black text-base items-center"
      )}>
          <div className="h-12 w-12 md:w-20 md:h-20 relative">
            <Image src={"/rccg_logo.png"} fill alt="The Redeemed Church Logo" />
          </div>
        <div className={clsx(
          'flex items-center gap-2 h-12',
          'md:flex-row',
          'lg:w-2/3 lg:h-20'
        )}>
          <Navigation.NavList className="max-md:hidden"/>
          {mobileNavList ? <Close toggle={toggleNavList} /> :  <Menu toggle={toggleNavList}/>}
          <div className="h-full cursor-pointer px-2 max-lg:text-sm">
            <GiveDialog />
          </div>
        </div>
      </div>
      {mobileNavList && <Navigation.NavList className="flex-col items-start md:hidden py-4"/>}
    </Container>
  );
};

const navlist = [
 {slug:'/', title:'Home'},
 {slug:'/live-service', title: "watch live service"},
 {slug:'/', title:"Events"},
 {slug:'/sermons', title:"Sermons"},
 {slug:'/m/gallery', title:"Gallery"},
 {slug:'/contact-us', title:"Contact Us"}
];

const NavList:React.FC<React.ComponentPropsWithoutRef<'ul'>> = ({className})=> <ul className={twMerge(clsx(
  'flex h-full justify-between items-center gap-2',
  'md:h-12',
  'lg:h-20'
), className)}> 
  {
    navlist.map((item, index) => {
      return (
        <li
          key={index}
          className={`h-full flex items-center px-2 cursor-pointer`}
        >
          <Link href={item.slug} className="max-lg:text-sm text-center">{item.title.toUpperCase()}</Link>
        </li>
      );
    })
  }
</ul>
Navigation.NavList = NavList
