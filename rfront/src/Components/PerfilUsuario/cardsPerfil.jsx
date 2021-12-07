import ImgMediaCard from './cardperf';
import Grid from '@mui/material/Grid';
import './vistaperfil.css';
import { obtenerFavoritos } from '../../services/UsuarioService';
import { useState, useEffect } from 'react';
import { getProvById } from '../../services/NegocioService';


function CardsPerfil (){

    const[favsData,setFavsData]= useState([])
    const idUser = window.sessionStorage.getItem('idUsuario')
    const token  = window.sessionStorage.getItem('token')

    useEffect(() => {

        obtenerFavoritos(idUser,token).then((response)=>{

            const ids = response.data.favoritos
            
            ids.map((proveedorId) =>(
                
                
                getProvById(proveedorId).then((response)=>{
                   
                   setFavsData([...favsData, response.data])

                }).catch((e) => {
                console.error('No funcionó la petición' + e);
                })
               
            ))

        }).catch((e) => {
        console.error('No funcionó la petición' + e);
        })
    
    },[])
   
    const cards = favsData.map((prov) =>(
        
        <Grid item md={4} sm={6} xs={12}>
            <ImgMediaCard prov={prov}/>
        </Grid>
    ))
  
    return cards;
}
  
export default CardsPerfil