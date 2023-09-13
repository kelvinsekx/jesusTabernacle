'use client'
import cloudinary from '@/lib/cloudinary'
import * as React from "react"
import {useSearchParams } from "next/navigation"
import Modal from '@/components/Modal'
import type { ImageProps } from '@/lib/types'
import { CounterContext } from "@/lib/context"
import { useLastViewedPhoto } from '@/lib/useLastViewedPhoto'

const Page = ()=> {
    const {state} = React.useContext(CounterContext)

    const [modalImages, setModalImages] = React.useState<ImageProps[] | undefined>(state.images)
    React.useEffect(()=> {
        const fetchImagesFromServerOnReload = async ()=> {
            if(!modalImages || modalImages?.length < 1){
                const results = await cloudinary.v2.search
                .expression(`folder:samples/*`)
                .max_results(50)
                .execute()

                setModalImages(results)
            }
        }
        fetchImagesFromServerOnReload()
    }, [])
    const searchParams = useSearchParams()
    const query = searchParams!.get('photoId')
    let photoId = Number(query);

    console.log({modal:state})

    const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()

    const lastViewedPhotoRef = React.useRef<HTMLAnchorElement>(null)

    React.useEffect(() => {
        // This effect keeps track of the last viewed photo in the modal to keep the index 
        // page in sync when the user navigates back
        if (lastViewedPhoto && !photoId) {
            lastViewedPhotoRef.current?.scrollIntoView({ block: 'center' })
            setLastViewedPhoto(null)
        }
    }, [photoId, lastViewedPhoto, setLastViewedPhoto])
    return <div>
        {photoId && 
            (
                <Modal
                    images={state.images!}
                    onClose={() => {
                        setLastViewedPhoto(photoId)
                    }}
                />
            )
        }
    </div>
}


export default Page