'use client'

import {useMemo} from 'react'
import {Construction} from 'lucide-react'
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

export const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!
    })

   
    const handleGetDir = ()=> {
         const churchAddress =
           "Jesus Tabernacle, 2828 Hillsborogh Road, Durham, NC 27705";
         const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
           churchAddress
         )}`;
         window.open(googleMapsUrl)
    }

    const center = useMemo(()=>({lat:36.014807, lng:-78.933660}), [])
    if(!isLoaded) return <div>loading...</div>
    return (
      <div>
        <button onClick={handleGetDir} className='bg-blue-600 text-white py-1 px-2 rounded-xl flex gap-2'>Get Direction <Construction /></button>
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    );
};
