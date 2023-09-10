import * as React from "react";
import { LargeContainer } from "./container";
import {Video} from 'lucide-react'
import { Header } from "./Header/header";

export default function WorshipLive() {
  return (
    <div>
      <LargeContainer className="">
        <div 
        className="text-center flex flex-col gap-2 items-center 
        bg-[url(/worship-with-us-at-jesus-tabernacle.jpg)] text-white py-20 md:py-28">
          <Header className="text-white max-md:w-full max-md:text-2xl">Worship with us in real time</Header>
          <p className="text-base" id="gallery">
         Experience the word and worship together online with our live church service
          </p>
          <a href="https://google.com" className='mt-4 flex justify-center items-center gap-2 bg-tb-green p-2 rounded w-4/5 md:w-1/4'>
            <span>Join Live Service</span>
            <Video />
          </a>
        </div>
      </LargeContainer>
    </div>
  );
}

