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
      <div
        className={clsx(
          "flex md:gap-4",
          "justify-between bg-white text-tb-black text-base items-center"
        )}
      >
        <div className="h-12 md:h-16 w-fit flex items-center">
          <div className="h-full w-12 md:w-24 relative overflow-hidden">
            <Image
              src={"/rccg_logo.png"}
              className="object-contain"
              fill
              alt="The Redeemed Church Logo"
            />
          </div>
          <div className='pl-1 text-center'>
            <div className="text-[#28166F] font-semibold max-md:text-base">
              JESUS TABERNACLE
            </div>
            <div className="text-[10px]/[10px] md:text-xs text-red-600 font-semibold font-mono">
              ...Hillsborough,Durham,N.C
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "flex items-center gap-2 h-12",
            "md:flex-row",
            "md:w-fit lg:h-20 "
          )}
        >
          <Navigation.NavList className="max-md:hidden" />
          {mobileNavList ? (
            <Close toggle={toggleNavList} />
          ) : (
            <Menu toggle={toggleNavList} />
          )}
          <div className="h-full cursor-pointer max-lg:text-sm">
            <GiveDialog />
          </div>
        </div>
      </div>
      {mobileNavList && (
        <Navigation.NavList className="flex-col items-start md:hidden py-4" />
      )}
    </Container>
  );
};

const navlist = [
 {slug:'/', title:'Home'},
 {slug:'/live-service', title: "watch live service"},
//  {slug:'/', title:"Events"},
 {slug:'/sermons', title:"Sermons"},
 {slug:'/gallery', title:"Gallery"},
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
          className={`h-full max-sm:w-1/2  flex items-center md:px-2 cursor-pointer border-1 justify-center border-2 border-transparent hover:border-black/40 hover:text-neutral-400`}
        >
          <Link href={item.slug} className="max-lg:text-sm w-full sm:text-center h-full py-1 md:py-0 px-0 md:px-2 flex sm:justify-center items-center ">{item.title.toUpperCase()}</Link>
        </li>
      );
    })
  }
</ul>
Navigation.NavList = NavList
