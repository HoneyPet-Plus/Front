import React, {Fragment,useEffect,useCallback,useState} from 'react'
import {MapContainer,TileLayer} from 'react-leaflet'
import MarkersShop from './MarkersShops';
import MarkerLocation from './MarkerLocation';
import "leaflet/dist/leaflet.css"
import './Map.css';
import 'leaflet';
import {Button} from 'react-bootstrap';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const center = [window.localStorage.getItem('userLat'), window.localStorage.getItem('userLng')]
const zoom = 13


function DisplayPosition({ map }) {
    const [position, setPosition] = useState(map.getCenter())
  
    const onClick = useCallback(() => {
      map.setView(center, zoom)
    }, [map])
  
    const onMove = useCallback(() => {
      setPosition(map.getCenter())
    }, [map])
  
    useEffect(() => {
      map.on('move', onMove)
      return () => {
        map.off('move', onMove)
      }
    }, [map, onMove])
  
    return (
      <p>
        latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
        <button onClick={onClick}>reset</button>
      </p>
    )
}

function MapView(){

    const lat  = window.localStorage.getItem('userLat')
    const long = window.localStorage.getItem('userLng')

    return (
        
        <Fragment>
            <MapContainer center={[lat,long]} zoom={13} minZoom={8}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <MarkerLocation/>
            <MarkersShop />
            </MapContainer>
            <Button
   
                className='btn-ubc'
                variant="outline-secondary" 
                id="userLocMap"
                >
                <MyLocationIcon />
            </Button>
        </Fragment>
        
    )
};

export default MapView