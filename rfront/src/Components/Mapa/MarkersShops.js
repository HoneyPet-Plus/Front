import React, {useState, useEffect} from "react";
import '../../Components/Mapa/Map.css'
import { getAllProvs } from '../../services/NegocioService';
import MarkerShop from "./MarkerShop";

function MarkersShop (){

  const[provsData,setProvsData]= useState([])
 
  useEffect(() => {
    
    getAllProvs().then((response)=>{

      setProvsData(response.data)
      console.log(response.data)
    }).catch((e) => {
      console.error('No funcionó la petición' + e);
    })
    
  }, [])

  const markers = provsData.map((place) =>(
      
      <MarkerShop key={place._id} place={place}></MarkerShop>
  ))

  return markers;
}

export default MarkersShop