import React from 'react'

import Link from 'next/link'

import {YoutubeIcon, InstagramIcon, MapPinIcon} from 'lucide-react'
import {ContactForm} from '@/components/ContactForm/form'
import { Header } from '@/components/Header/header'
import {LargeContainer} from '@/components/container'
import {LocateUs} from '@/components/LocateUs/locateus'

const ContactUs = ()=> {
    return (
      <LargeContainer>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-10 justify-center w-full py-20 bg-[url(/contact-graphics.jpg)] ">
            <Header>Contact Us</Header>
            <div className="w-fit justify-center items-center md:items-start flex flex-col md:flex-row gap-4 md:gap-10">
              <ContactUs.Slate
                icon={<MapPinIcon />}
                aside={"Visit us"}
                main={
                  " Jesus Tabernacle, 2828 Hillsborogh Road, Durham, NC 27705"
                }
              />
              <ContactUs.Slate
                href="https://www.instagram.com/rccgjesustabernacle/"
                icon={<InstagramIcon />}
                aside={"Instagram:"}
                main={"@rccgjesustabernacle"}
              />
              <ContactUs.Slate
                href="https://www.youtube.com/@rccgnajesustabernacle5733"
                icon={<YoutubeIcon />}
                aside={"Youtube"}
                main={"@rccgnajesustabernacle5733"}
              />
            </div>
          </div>
          <div className="w-[95%] md:w-3/4 relative bottom-8">
            <ContactForm />
          </div>
        </div>
        <LocateUs />
      </LargeContainer>
    );
}

const Slate = ({
  icon,
  aside,
  main,
  href = "",
}: {
  icon: React.ReactNode;
  aside: string;
  main: string;
  href?: string;
}) => (
  <Link
    href={href}
    className="flex flex-col items-center gap-2 w-1/2 md:w-[24%]  text-center break-words"
  >
    <span className="bg-[#D9D9D9] rounded-full w-12 h-12 flex justify-center items-center">
      {icon}{" "}
    </span>
    <div className="flex flex-col gap-2">
      <span className="text-tb-grey2 pt-1">{aside}</span>
      <p className="break-all">{main}</p>
    </div>
  </Link>
);
ContactUs.Slate = Slate

export default  ContactUs