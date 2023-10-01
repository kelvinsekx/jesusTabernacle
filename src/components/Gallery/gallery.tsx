import * as React from "react";
import { IBTCMarquee } from "./ibtcMarquee";
import { Container } from "../container";
import { Header } from "../Header/header";
import { Description } from "../Description";
import { Section } from "../Section/section";

import type { ImageProps } from '@/lib/types'
import getBase64ImageUrl from '@/lib/generateBlurPlaceholder'
import cloudinary from '@/lib/cloudinary'

async function getStaticImages() {
  const results = await cloudinary.v2.search
    .expression(`folder:samples/*`)
    .max_results(10)
    .execute()


  let reducedResults: ImageProps[] = []

  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  return {
      images: reducedResults
  }
}

export async function Gallery() {
  const {images} = await getStaticImages()
  const sources = images.slice(0, 5)
  const sources2 = images.slice(5)
  return (
    <div className="bg-[#EAF2F6]/10">
      <Container pad>
        <Section>
          <Header>Our Gallery</Header>
          <Description>
            Be the First to Know About Exciting Events and Activities
          </Description>
        </Section>
      </Container>
        <IBTCMarquee images={sources}></IBTCMarquee>
        <IBTCMarquee images={sources2} reverse></IBTCMarquee>

    </div>
  );
}

