import React, {useEffect,useCallback,useState, useMemo} from 'react'
import {MapContainer,TileLayer} from 'react-leaflet'
import MarkersShop from './MarkersShops';
import MarkerLocation from './MarkerLocation';
import "leaflet/dist/leaflet.css"
import './Map.css';
import 'leaflet';
import {Button} from 'react-bootstrap';
import MyLocationIcon from '@mui/icons-material/MyLocation' ;
import { useLocalStorage } from '../../Hooks/useLocalStorage'

const userLat = window.localStorage.getItem('userLat')
const userLng = window.localStorage.getItem('userLng')

const center = [userLat,userLng]
const zoom = 18


function DisplayPosition({ map }) {
    const [position, setPosition] = useState(map.getCenter())
    console.log(position)
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
  // const lat  = window.localStorage.getItem('centerLat')
  // const long = window.localStorage.getItem('centerLng')

  const [userLng, setUserLng] = useLocalStorage('userLng',-74.247894)
  const [userLat, setUserLat] = useLocalStorage('userLat',4.6482837)
  const [centerLng, setCenterLng] = useLocalStorage('centerLng',-74.247894)
  const [centerLat, setCenterLat] = useLocalStorage('centerLat',4.6482837)


  useEffect(()=>{
      navigator.geolocation.getCurrentPosition(
          
          function(position){

              setUserLng(position.coords.longitude)
              setUserLat(position.coords.latitude)
              setCenterLng(position.coords.longitude)
              setCenterLat(position.coords.latitude)
          },
          function(error){
              console.log(error)
          },
          {
              enableHighAccuracy: true
          }
      );
  },[])

  const displayMap = useMemo(
    () => (
      <>
          <MapContainer center={[centerLat,centerLng]} zoom={18} minZoom={10} whenCreated={setMap}>
          <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <MarkerLocation position={[userLat,userLng]}/>
          <MarkersShop />
          </MapContainer>
      </>
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