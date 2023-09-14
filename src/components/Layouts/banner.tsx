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
          items={[
            <Card  key='1'/>,
            <Card2 key='2'/>,
            <Card3 key='3'/>
          ]}
        />
      </div>
}


export const Carousel = ({ items }: { items: React.ReactNode[] }) => (
  <AliceCarousel animationDuration={3000} autoPlayInterval={4000} autoHeight autoPlay={true} infinite mouseTracking items={items} />
)
Banner.Carousel = Carousel

const CardFoot: React.FC<React.ComponentPropsWithoutRef<'span'>> = ({children})=> <span className='text-xl md:text-2xl border-4 border-white p-2 md:p-4 rounded'>{children}</span>
const CardContent: React.FC<React.ComponentPropsWithoutRef<'div'>> = ({children})=> <div className='overflow-hidden font-mono'>{children}</div>



const Card = ()=> <CardContent>
  <div className='relative overflow-hidden h-[22rem] lg:h-[35rem] w-full'>
   <Image src={sources[0]} alt='' fill className='object-cover aspect-[3/4]' />
  </div>
  <div className='text-white absolute top-[20%] md:top-[5%] xl:top-[20%] left-1/2 -translate-x-1/2 w-full md:w-[80%] text-center gap-4 '>
    <div className='flex flex-col items-center'>
      <span className='text-4xl  md:text-7xl lg:text-8xl'>SUNDAY WORSHIP SERVICE</span> 
      <CardFoot>{`9am - 12pm`.toUpperCase()}</CardFoot>
    </div>
  </div>
</CardContent>
Banner.Card = Card

const Card2 = ()=> <CardContent>
  <div className='relative overflow-hidden h-[22rem] lg:h-[35rem] w-full'>
   <Image src={sources[1]} alt='' fill className='object-cover aspect-[3/4]' />
  </div>
  <div className='text-white absolute top-[20%] md:top-[5%] xl:top-[20%] left-1/2 -translate-x-1/2 w-full md:w-[80%] text-center gap-4 '>
    <div className='flex flex-col items-center'>
      <span className='text-4xl  md:text-7xl lg:text-8xl'>It’s a new dawn</span> 
      <CardFoot>{`Come and walk the path of grace with us!`}</CardFoot>
    </div>
  </div>
</CardContent>
Banner.Card2 = Card2

const Card3 = ()=> <CardContent>
  <div className='relative overflow-hidden h-[22rem] lg:h-[35rem] w-full'>
   <Image src={sources[2]} alt='' fill className='object-cover aspect-[3/4]' />
  </div>
  <div className='text-white absolute top-[10%] md:top-[5%] xl:top-[20%] left-1/2 md:left-[30%] -translate-x-1/2 w-full md:w-[80%] text-center gap-4 '>
    <div className='flex flex-col items-center'>
      <span className='text-4xl  md:text-7xl lg:text-8xl'>Bible study</span> 
      <CardFoot>{`Come and walk the path of grace with us!`}</CardFoot>
    </div>
  </div>
</CardContent>
Banner.Card3 = Card3


export default Banner