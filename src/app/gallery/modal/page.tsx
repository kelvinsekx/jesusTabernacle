'use client'
import * as React from "react"
import {useSearchParams } from "next/navigation"
import Modal from '@/components/Modal'
import { CounterContext } from "@/lib/context"
import { useLastViewedPhoto } from '@/lib/useLastViewedPhoto'

const Page = ()=> {
    const {state} = React.useContext(CounterContext)
    const searchParams = useSearchParams()
    const query = searchParams!.get('photoId')
    let photoId = Number(query);

    console.log({state})

    const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto()

    const lastViewedPhotoRef = React.useRef<HTMLAnchorElement>(null)

    React.useEffect(()=> {
        
    }, [])

    React.useEffect(() => {
        // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
        if (lastViewedPhoto && !photoId) {
        lastViewedPhotoRef.current!.scrollIntoView({ block: 'center' })
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