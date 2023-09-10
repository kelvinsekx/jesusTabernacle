import * as React from "react";
import Image from "next/image";
import {
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
} from "lucide-react";

import { Separator } from "@/components/ui/separator"
import { twMerge } from "tailwind-merge";


export const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-6  gap-x-24 p-9 md:p-17.5 bg-tb-green text-white text-base md:items-center">
      <div className="h-16 w-16 md:h-24 md:w-24 lg:w-32 lg:h-32 relative">
        <Image src={"/rccg_logo.png"} fill alt="The Redeemed Church Logo" />
      </div>
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between ">
        <Footer.Section className="md:w-1/5">
          <Footer.Header>Quick links</Footer.Header>
          <ul>
            {quick_links.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </Footer.Section>
        <Separator className='md:hidden'/>
        <Footer.Section className="md:w-1/3">
          <Footer.Header>Locate Us</Footer.Header>
          <p>
            Jesus Tabernacle, 2828 Hillsborogh Road, Durham, NC 27705
          </p>
        </Footer.Section>
        <Separator className='md:hidden'/>
        <Footer.Section className="md:w-1/3">
          <Footer.Header>Follow us</Footer.Header>
          <div className="flex pb-6 gap-x-5">
            <Footer.Icon>
              <TwitterIcon />
            </Footer.Icon>
            <Footer.Icon>
              <InstagramIcon />
            </Footer.Icon>
            <Footer.Icon>
              <YoutubeIcon />
            </Footer.Icon>
            <Footer.Icon>
              <FacebookIcon />
            </Footer.Icon>
          </div>
          <p className="pb-6">
            <span className="text-sm">Phone: </span>
            (919) 641-3832
          </p>
          <p>
            <span className="text-sm">Email: </span>rccgnajesustabernacle@gmail.com
          </p>
        </Footer.Section>
      </div>
    </div>
  );
};

const quick_links = [
  "About Us",
  "Events",
  "Sermons",
  "Watch Live",
  "Gallery",
  "Give",
];

/**
 * Footer.Icon
 * @param children
 * @returns React.Node
 */
const Icon: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <span className="border-2 rounded-full p-2">{children}</span>;
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

const Section: React.FC<React.ComponentPropsWithoutRef<'section'>> = ({children, className})=>  <section className={twMerge("w-[80%] md:w-1/5", className)}>
 {children}
</section>
Footer.Section = Section