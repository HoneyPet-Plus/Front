import React from "react";
import '../../Components/Mapa/Map.css'

import MarkerShop from "./MarkerShop";
// import infoDrawer from "./drawer";


function MarkersShop (){

  const lugares = JSON.parse(window.localStorage.getItem('proveedores'))

  const markers = lugares.map((place) =>(
      
      <MarkerShop key={place.id} place={place}></MarkerShop>
  ))

  return markers;
}

export default MarkersShop