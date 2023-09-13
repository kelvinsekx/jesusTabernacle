'use client'

import {useMemo} from 'react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

export const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
    })

    const center = useMemo(()=>({lat:36.014807, lng:-78.933660}))
    if(!isLoaded) return <div>loading...</div>
    return <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center}/>
    </GoogleMap>
};
