import React, {useState, useEffect} from 'react'
import {MapContainer,TileLayer, MapConsumer} from 'react-leaflet'
import MarkerShop from './MarkersShops';
import MarkerLocation from './MarkerLocation';
import "leaflet/dist/leaflet.css"
import './Map.css';
import 'leaflet';

import {lugares} from '../../assets/Mapa/places.json'


function MapView(props){

    const lng = props.lng
    const lat = props.lat

    return (
        
        <MapContainer center={[lng,lat]} zoom={props.zoom} minZoom={props.minZoom}>
            {/* <MapConsumer >
            {(map) => {
                map.setView([lat,lng])
             return null
            }}
            </MapConsumer> */}
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerLocation  lng={props.lat} lat={props.lng}/>
            <MarkerShop lugares={lugares}/>
        </MapContainer>

    )
};

export default MapView