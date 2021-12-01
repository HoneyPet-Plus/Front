import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import './InputMap.css';
import inputPin from "../../assets/Mapa/inputpin.svg"
import { InputGroup, Form, FormControl, Button } from 'react-bootstrap';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Tooltip from '@mui/material/Tooltip';


const userLat = window.localStorage.getItem('userLat')
const userLng = window.localStorage.getItem('userLng')

const center = [userLat,userLng]
// const center = [51.505,-0.09]
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
        <div>
            <InputGroup className="mb-3">
                <Tooltip title="Mi Ubicación" arrow>
                    <Button 
                    onClick={onClick}
                    variant="outline-secondary" 
                    id="userLoc"
                    >
                        <MyLocationIcon />
                    </Button>
                </Tooltip>
                <InputGroup.Text id="biz-lat">Latitud</InputGroup.Text>
                <FormControl 
                className="no-outline"
                value={position.lat.toFixed(4)}
                aria-label="Latitud"
                aria-describedby="biz-lat"
                />
                <InputGroup.Text id="biz-lng">Longitud</InputGroup.Text>
                <FormControl 
                className="no-outline"
                value={position.lng.toFixed(4)}
                aria-label="Longitud"
                aria-describedby="biz-lng"
                />
                <Button variant={!window.localStorage.getItem('bizLat') && !window.localStorage.getItem('bizLng') ? 'outline-danger' : 'outline-success'} id="setLoc">
                    {!window.localStorage.getItem('bizLat') && !window.localStorage.getItem('bizLng') ? 'Asignar Ubicación' : 'Actualizar Ubicación'}
                </Button>
            </InputGroup>
            <Form.Text id="bizLocHelpBlock" muted>
                <span className="badge bg-secondary">Ubicación Asignada: </span> Latitud: 0, Longitud: 0
            </Form.Text>
        </div>
    )
  }


export const InputMap = () => {

    const [map, setMap] = useState(null)

    const displayMap = useMemo(
        () => (
            <div className="input-map-container">
                <MapContainer
                    className="input-map"
                    center={center}
                    zoom={zoom}
                    scrollWheelZoom={false}
                    whenCreated={setMap}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
                <img className="input-pin" src={inputPin} alt="Pin de referencia localizacion centrado" />
            </div>
        ),
        [],
    )


    return (
        <div>
            {map ? <DisplayPosition map={map} /> : null}
            {displayMap}
            
        </div>
    )
}
