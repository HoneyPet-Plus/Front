import React, {useState, useEffect} from 'react'

import MapView from './ViewMap'

const Mapa = () => {

    const [state, setstate] = useState({
        longitud:5,
        latitud:5,
        zoom: 3,
        minZoom: 8
    })

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            function(position){
                setstate({
                    longitud:position.coords.longitude,
                    latitud: position.coords.latitude
                    
                })
            },
            function(error){
                console.log(error)
            },
            {
                enableHighAccuracy: true
            }
        );
    })

   

    return (
        <MapView lng={state.longitud} lat={state.latitud} zoom={state.zoom} minZoom ={state.minZoom} />
    )
}

export default Mapa
