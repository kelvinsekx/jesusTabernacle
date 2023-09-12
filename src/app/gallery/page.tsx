
import cloudinary from '@/lib/cloudinary'
import type { ImageProps } from '@/lib/types'
import getBase64ImageUrl from '@/lib/generateBlurPlaceholder'

import { Gallery as ClientGallery } from './gallery'
import type { Metadata } from 'next'

 

export const metadata: Metadata = {
  title: 'Jesus Tabernacle Photos',
  description: '...have a pictorial experience in God\'s presence',
}

export const revalidate = 60

async function getStaticImages() {
    const results = await cloudinary.v2.search
      .expression(`folder:samples/*`)
      .max_results(50)
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

const Gallery = async ()=> {
    const {images} = await getStaticImages()
    return (
        <>
            <ClientGallery images={images} />
        </>
    )
}
export default Gallery