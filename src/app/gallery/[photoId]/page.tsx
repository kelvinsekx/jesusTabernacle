import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Carousel from '@/components/Carousel'
import getResults from '@/lib/cachedImages'
import cloudinary from '@/lib/cloudinary'
import getBase64ImageUrl from '@/lib/generateBlurPlaceholder'
import type { ImageProps } from '@/lib/types'


const getStaticImages = async (context) => {
    const results = await getResults()
  
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
    

    const currentPhoto = reducedResults.find(
      (img) => img.id === Number(context)
    )
    currentPhoto!.blurDataUrl = await getBase64ImageUrl(currentPhoto!)
  
    return {
        currentPhoto: currentPhoto
    }
  }

  
const Home = async ({ params }: { params: any }) => {
    const queryParams = { slug: params?.photoId ?? `` };
    let index = Number(queryParams.slug)
   
    const {currentPhoto} = await getStaticImages(index)

    const currentPhotoUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_2560/${currentPhoto?.public_id}.${currentPhoto?.format}`

    return (
        <>
        <Head>
            <title>Jesus Tabernacle Photos</title>
            <meta property="og:image" content={currentPhotoUrl} />
            <meta name="twitter:image" content={currentPhotoUrl} />
        </Head>
        <main className="mx-auto max-w-[1960px] p-4">
            <Carousel currentPhoto={currentPhoto} index={index} />
        </main>
        </>
    )
}

export default Home

// export async function getStaticPaths() {
//   const results = await cloudinary.v2.search
//     .expression(`folder:samples/*`)
//     .max_results(400)
//     .execute()

//   let fullPaths: { params: { photoId: string; }; }[] = []
//   for (let i = 0; i < results.resources.length; i++) {
//     fullPaths.push({ params: { photoId: i.toString() } })
//   }

//   return {
//     paths: fullPaths,
//     fallback: false,
//   }
// }