import React, {Fragment,useEffect,useCallback,useState, useMemo} from 'react'
import {MapContainer,TileLayer} from 'react-leaflet'
import MarkersShop from './MarkersShops';
import MarkerLocation from './MarkerLocation';
import "leaflet/dist/leaflet.css"
import './Map.css';
import 'leaflet';
import {Button} from 'react-bootstrap';
import MyLocationIcon from '@mui/icons-material/MyLocation' ;

const userLat = window.localStorage.getItem('userLat')
const userLng = window.localStorage.getItem('userLng')

const center = [userLat,userLng]
const zoom = 18


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
      <Button
              onClick={onClick}
              className='btn-ubc'
              variant="outline-secondary" 
              id="userLocMap"
              >
              <MyLocationIcon />
      </Button>
    )
}

function MapView(){

  const [map, setMap] = useState(null)
  const lat  = window.localStorage.getItem('centerLat')
  const long = window.localStorage.getItem('centerLng')

  const displayMap = useMemo(
    () => (
      <Fragment>
          <MapContainer center={[lat,long]} zoom={18} minZoom={8} whenCreated={setMap}>
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <MarkerLocation/>
          <MarkersShop />
          </MapContainer>
      </Fragment>
    ),
    [],
  )
  
    return (
        
      <div>
        {map ? <DisplayPosition map={map} /> : null}
        {displayMap}
      </div>
        
    )
};

export default MapView