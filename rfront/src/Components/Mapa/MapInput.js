import React from 'react'
import DraggableMarker from "./DraggableMarker"
import {MapContainer,TileLayer} from 'react-leaflet'
import './MapInput.css';


const center = {
    lat: 4.627354,
    lng: -74.082807,
}

export default function MapInput (){
    return (
        <MapContainer  className="input-map" center={center} zoom={20} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <DraggableMarker props={center}/>
        </MapContainer>
    )
}
