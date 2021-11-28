import React from 'react'
import DraggableMarker from "./MapInput"
import {MapContainer,TileLayer} from 'react-leaflet'


const center = {
    lat: 51.505,
    lng: -0.09,
}

export default function ViewMapInput (){
    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DraggableMarker props={center}/>
        </MapContainer>
    )
}
