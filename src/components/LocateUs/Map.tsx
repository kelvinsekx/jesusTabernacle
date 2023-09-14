import * as React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export const Map = ()=> {
    const {} = useLoadScript({
        googleMapsApiKey: ''
    })
    return <div>MAP</div>
}