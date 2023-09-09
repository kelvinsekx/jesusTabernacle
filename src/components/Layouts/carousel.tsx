'use client'

import * as React from 'react'
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const sources = [
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686718456/a_speaker_at_the_ibadan_techies_kff5so",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686712604/techies_at_a_meetup_in_Nigeria_pnjhwb",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686713329/happy_techies_at_a_tech_meetup_in_nigeria_guvvww",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1686713737/two_attendees_at_ibadan_techies_meetup_mgtzlr",
  "https://res.cloudinary.com/dfliypjzt/image/upload/q_50,f_auto,fl_lossy,w_auto,c_scale/v1681138175/gallery/grid1_2d36_eqhbcn",
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

const Card = ({src}: {src: string})=> <div className='relative h-[25rem] lg:h-[35rem] w-full'>
   <Image src={src} alt='' fill className='object-fit object-center' />
</div>
Banner.Card = Card

export const Carousel = ({ items }: { items: React.ReactNode[] }) => (
  <AliceCarousel animationDuration={2500} autoPlayInterval={3000} autoHeight autoPlay={true} infinite mouseTracking items={items} />
)
Banner.Carousel = Carousel

export default Banner