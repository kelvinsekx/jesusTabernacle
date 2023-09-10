import * as React from "react";
import { LargeContainer } from "./container";
import {Video} from 'lucide-react'
import { Header } from "./Header/header";
import Link from "next/link";

export default function WorshipLive() {
  return (
    <div>
      <LargeContainer className="">
        <div 
        className="text-center flex flex-col gap-2 items-center 
        bg-[url(/worship-with-us-at-jesus-tabernacle.jpg)] text-white py-20 md:py-28">
          <Header className="text-white max-md:w-full max-md:text-[1.7rem]/[26px]">Worship with us in real time</Header>
          <p className="text-base" id="gallery">
         Experience the word and worship together online with our live church service
          </p>
          <Link href="/live-service" className='mt-4 flex justify-center items-center gap-2 bg-tb-green p-2 rounded w-4/5 md:w-1/4'>
            <span>Join Live Service</span>
            <Video />
          </Link>
        </div>
      </LargeContainer>
    </div>
  );
}

