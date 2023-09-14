'use client'

import * as React from 'react'
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const sources = [
  "https://res.cloudinary.com/joi-de-vivro/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1694668748/others/Banner2_1_ulsqzx.jpg",
  "https://res.cloudinary.com/joi-de-vivro/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1694668753/others/Banner3_1_rm1cpk.jpg",
  "https://res.cloudinary.com/joi-de-vivro/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1694668743/others/Banner1_1_wx6ons.jpg"
];

const Banner = ()=> {
    return <div className="_34sdf max-w-[100rem]">
        <Banner.Carousel
          items={sources.map((src, index) => (
            <Banner.Card src={src} key={index} />
          ))}
        />
      </div>
}

const Card = ({src}: {src: string})=> <div><div className='relative overflow-hidden h-[22rem] lg:h-[35rem] w-full'>
   <Image src={src} alt='' fill className='object-cover aspect-[3/4]' />
</div>
<p className='text-white absolute top-[20%] md:top-[5%] xl:top-[20%] left-1/2 -translate-x-1/2 w-full md:w-[80%] text-center flex flex-col items-center gap-4'>
  <span className='text-4xl  md:text-7xl lg:text-8xl'>SUNDAY WORSHIP SERVICE</span> <span className='text-2xl border-4 border-white p-4'>{`8am - 12pm`.toUpperCase()}</span>
  </p>
</div>
Banner.Card = Card

export const Carousel = ({ items }: { items: React.ReactNode[] }) => (
  <AliceCarousel animationDuration={3000} autoPlayInterval={4000} autoHeight autoPlay={true} infinite mouseTracking items={items} />
)
Banner.Carousel = Carousel

export default Banner