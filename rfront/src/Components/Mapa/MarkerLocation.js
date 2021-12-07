import React from "react";
import '../../Components/Mapa/Map.css'

import {Marker, Popup} from 'react-leaflet'
import {IconLocation} from "./IconLocation";

function MarkerLocation (position){
    
    return (
        <Marker position={position.position} icon={IconLocation} >
            <Popup>
                <h3>Tu estas aqui</h3>
            </Popup>
        </Marker>
    );
}

export default MarkerLocation