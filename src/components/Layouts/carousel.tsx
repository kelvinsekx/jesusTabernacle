'use client'

import * as React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Banner = ()=> {
    return <div className="_34sdf">
        <Banner.Carousel
          items={[12,3,23,45].map((data, index) => (
            <Banner.Card key={index} />
          ))}
        />
      </div>
}

const Card = ()=> <div>
    Hello World
</div>
Banner.Card = Card

const Carousel = ({ items }: { items: React.ReactNode[] }) => (
  <AliceCarousel autoHeight infinite mouseTracking items={items} />
)
Banner.Carousel = Carousel

export default Banner