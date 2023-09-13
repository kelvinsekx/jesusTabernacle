'use client'
import * as React from 'react'
import type { ImageProps } from '@/lib/types'
import { CounterContext } from '@/lib/context'

import Link from "next/link"
import Image from 'next/image'

import Bridge from '@/components/BridgeIcon'
import {GalleryUpload} from '@/components/UploadButtons/gallery'

export const Gallery = async ({  images }: {  images: ImageProps[] })=> {
    const { dispatch } = React.useContext(CounterContext);

    React.useEffect(()=> {
        dispatch({type: 'ADD', payload: images})
    }, [])

    return (
        <>
           <GalleryList images={images} />
        </>
    )
}

const GalleryList = React.memo(({images}: {images: ImageProps[] | undefined})=> {
    const ImagesComponent = ()=> {
        if(!images) return <p>Error Fetching Images...Kindly reload this page.</p>
        return <>
            {images.map(({ id, public_id, format, blurDataUrl }) => <Link
                key={id}
                href={`/gallery/modal/${id}`}
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
                <Image
                    alt="RCCG, Jesus Tabernacle photo"
                    className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                    style={{ transform: 'translate3d(0, 0, 0)' }}
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                    width={720}
                    height={480}
                    sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                />
            </Link>)}
        </>
    }
    return <>
        <main className="mx-auto max-w-[1960px] p-4">
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 text-tb-black">
            <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
                <div className="absolute inset-0 flex items-center justify-center opacity-20 !bg-tb-black">
                    <span className="flex max-h-full max-w-full items-center justify-center">
                        <Bridge />
                    </span>
                    <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
                </div>
                <Image src={'/rccg_logo.png'} alt="redeemed logo" height={100} width={100} />
                <h1 className="mt-8 !text-tb-black mb-4 text-base font-bold uppercase tracking-widest">
                    JESUS TABERNACLE PHOTOS 🔥
                </h1>
                <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
                    Our incredible people are always filled with smile and love as you worship and join us! Halleluyah
                </p>
                <div className="pointer z-10 mt-6 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-4">
                Have a lovely time here!
                </div>
                <GalleryUpload />
            </div>
            <ImagesComponent />
        </div>
    </main>
    <footer className="p-6 text-center !text-tb-black/80 sm:p-12">
        Thank you to the Jesus Tabernacle Media Team 😍
    </footer>
</>
})