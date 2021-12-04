import React from "react";
import '../../Components/Mapa/Map.css'

import {Marker, Popup} from 'react-leaflet'
import {IconLocation} from "./IconLocation";

function MarkerLocation (){
    
    const lat  = window.localStorage.getItem('userLat')
    const long = window.localStorage.getItem('userLng')

    return (
        <Marker position={[lat,long]} icon={IconLocation} >
            <Popup>
                <h3>Tu estas aqui</h3>
            </Popup>
        </Marker>
    );
}

export default MarkerLocation