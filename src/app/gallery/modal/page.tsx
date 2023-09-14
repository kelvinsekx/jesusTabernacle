'use client'
import * as React from "react"
import {useSearchParams } from "next/navigation"
import Modal from '@/components/Modal'
import { CounterContext } from "@/lib/context"

const Page = ()=> {
    const {state} = React.useContext(CounterContext)

    const searchParams = useSearchParams()
    const query = searchParams!.get('photoId')
    let photoId = Number(query);

  const cond =  !state.images || state.images.length < 1

    return <div>
        {
            cond ?
            <p className='text-center text-2xl p-4'>Please go <a href="/gallery">back to gallery page</a></p> :
            <Modal
                images={state.images!}
            />
        }
    </div>
}


export default Page