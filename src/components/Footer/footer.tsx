import * as React from "react";

import Link from "next/link";
import Image from "next/image";
import {
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
} from "lucide-react";

import { Separator } from "@/components/ui/separator"
import { LargeContainer } from "../container";
import { twMerge } from "tailwind-merge";

import {Login } from './login'


export const Footer = () => {
  return (
    <div className="bg-tb-green">
      <LargeContainer className="grid gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_3fr] text-white text-base py-10 px-4">
        <div className="h-16 w-16 md:h-24 md:w-24 lg:w-32 lg:h-32 relative overflow-hidden sm:m-auto">
          <Image
            src={"/rccg_logo.png"}
            fill
            alt="The Redeemed Church Logo"
            className="object-cover"
          />
        </div>
        <Footer.Section className="">
          <Footer.Header>Quick links</Footer.Header>
          <ul>
            {navlist.map((list, index) => (
              <li key={index}>
                <Link href={list.slug}>{list.title}</Link>
              </li>
            ))}
          </ul>
          <Login />
          <Separator className="md:hidden my-6" />
        </Footer.Section>
        <Footer.Section className=" max-sm:text-left text-center lg:text-left">
          <Footer.Header>Locate Us</Footer.Header>
          <p>Jesus Tabernacle, 2828 Hillsborogh Road, Durham, NC 27705</p>
          <Separator className="md:hidden my-6" />
        </Footer.Section>
        <Footer.Section className="">
          <Footer.Header>Follow us</Footer.Header>
          <div className="flex pb-6 gap-x-5">
            <Footer.Icon href="https://twitter.com/Rccgnajt">
              <TwitterIcon className="h-full w-full" />
            </Footer.Icon>
            <Footer.Icon href="https://www.instagram.com/rccgjesustabernacle/#">
              <InstagramIcon className="h-full w-full" />
            </Footer.Icon>
            <Footer.Icon href="https://www.youtube.com/@rccgnajesustabernacle5733">
              <YoutubeIcon className="h-full w-full" />
            </Footer.Icon>
            <Footer.Icon href="https://www.facebook.com/jesustabernacle.rccgna">
              <FacebookIcon className="h-full w-full" />
            </Footer.Icon>
          </div>
          <p className="pb-6">
            <span className="text-sm">Phone: </span>
            (919) 641-3832
          </p>
          <p>
            <span className="text-sm">Email: </span>
            rccgna.jesustabernacle@gmail.com
          </p>
        </Footer.Section>
      </LargeContainer>
    </div>
  );
};


const navlist = [
  { slug: "/live-service", title: "Watch live service" },
  //  {slug:'/', title:"Events"},
  { slug: "/sermons", title: "Sermons" },
  { slug: "/gallery", title: "Gallery" },
  { slug: "/contact-us", title: "Contact Us" },
];

/**
 * Footer.Icon
 * @param children
 * @returns React.Node
 */
const Icon: React.FC<React.PropsWithChildren & {href? : string}> = ({ children, href='' }) => {
  return <a href={href} className="border-2 rounded-full h-[30px] w-[30px] p-1 hover:border-slate-900">{children}</a>;
};
Footer.Icon = Icon;

/**
 * Footer.Header
 * @param children
 * @returns React.Node
 */
const Header: React.FC<React.PropsWithChildren> = ({ children }) => <header className="font-medium text-xl md:text-2xl leading-6 pb-3 md:pb-6">
  {children}
</header>
  
Footer.Header = Header;

const Section: React.FC<React.ComponentPropsWithoutRef<'section'>> = ({children, className})=>  <section className={twMerge("", className)}>
 {children}
</section>
Footer.Section = Section
