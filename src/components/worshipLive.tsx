import * as React from "react";
import { Container } from "./container";
import Image from 'next/image'
import {Video} from 'lucide-react'

export default function WorshipLive() {
  return (
    <div className='relative'>
      <div className='w-full h-80 relative'><Image src={'/worship-with-us-at-jesus-tabernacle.jpg'} fill alt="" className="object-fit object-cover" /></div>
      <Container className="absolute bg-transparent left-1/2 top-1/2 w-fit text-white -translate-x-1/2">
        <div className="text-center flex flex-col gap-2 items-center">
          <div className="text-4.5xl pb-2">Worship with us in real time</div>
          <p className="text-base" id="gallery">
         Experience the word and worship together online with our live church service
          </p>
          <a href="https://google.com" className='mt-4 border-2 border-red-400 flex gap-2 bg-tb-green p-2 rounded'>
            <span>Join Live Service</span>
            <Video />
          </a>
        </div>
      </Container>
    </div>
  );
}

