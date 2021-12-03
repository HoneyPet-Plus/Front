import React, {useState, useEffect, useCallback} from 'react'
import MapView from './ViewMap'
import { useLocation} from 'react-router-dom'
import {Button} from 'react-bootstrap';
import MyLocationIcon from '@mui/icons-material/MyLocation';


function Mapa (){

    const location = useLocation();
    const data = location.state

    

    return (
        <div>
            <header className='header'></header>
            <MapView lng={data.longitud} lat={data.latitud} zoom={data.zoom} minZoom ={data.minZoom}>
            
            </MapView>
            <Button
   
                className='btn-ubc'
                variant="outline-secondary" 
                id="userLocMap"
                >
                <MyLocationIcon />
            </Button>
        </div>
    )
}

export default Mapa
