import React from 'react'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {Marker, Popup} from 'react-leaflet'
import {IconShop} from "./IconShop";
import Swal from 'sweetalert2';
import { favProveedor } from '../../services/NegocioService';

const MarkerShop = (place) => {
    
    const anchor = 'right'

    const [state, setState] = React.useState({
        right: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
    
      setState({ ...state, [anchor]: open });
    };

    const visitarPagina = () => (event) =>{
      
      
      // Swal.fire({
      //   title: '¿Estas seguro de que quieres visitar la pagina de "'+place.place.nombre_empresa+'" ahora mismo?',
      //   text: "Elige una opcion",
      //   icon: 'question',
      //   showCancelButton: true,
      //   confirmButtonColor: '#F7CC31',
      //   cancelButtonColor: '#cfcfcf',
      //   confirmButtonText: 'Si, visitar pagina'
      // }).then((result) => {
      //   if (result.isConfirmed) {
          
      //   }
      // })
        
    }

    const añadirFavoritos= () => (event) =>{
    
      const idNegocio = place.place._id

      const idUsuario = window.sessionStorage.getItem('idUsuario');
      const token     = window.sessionStorage.getItem('token');
      const rol       = window.sessionStorage.getItem('rol');

      if(idUsuario != null && token != null){
        if(rol === 'usuario'){
          Swal.fire({
            title: '¿Estas seguro de que quieres añadir a "'+place.place.nombre_empresa+'" a tu lista de favoritos?',
            text: "Elige una opcion",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#F7CC31',
            cancelButtonColor: '#cfcfcf',
            confirmButtonText: 'Si, añadir a favoritos'
          }).then((result) => {
            if (result.isConfirmed) {
              
              console.log(token)
              favProveedor(idUsuario,idNegocio,token)
                .then((response) => {
                  console.log(response.data.mensaje)
                  if(response.data.mensaje === 'El proveedor se añadió a la lista de favoritos'){
                    Swal.fire(
                      'Añadido!',
                      '"'+place.place.nombre_empresa+'" se ha añadido a tu lista de favoritos',
                      'success'
                    )
                  }else{
                    if(response.data.mensaje === 'El proveedor ya esta en tu lista de favoritos'){
                      Swal.fire(
                        'No añadido!',
                        '"'+place.place.nombre_empresa+'" ya se encuentra en tu lista da favoritos. sí deseas eliminarlo de esta, dirígete a tu perfil para poder realizar esta acción ',
                        'warning',
                      )
                    }
                  }
                })
                .catch((e) => {
                  console.error('No funcionó la petición' + e);
                  Swal.fire({
                    icon: 'error',
                    title: 'Paila',
                    showConfirmButton: false,
                    timer: 2000
                  })
                })
            }
          })
          
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Necesitas tener una cuenta de usuario normal si quieres añadir proveedores a tu lista de favoritos',
            footer: '<a href="/registrar">¿Quieres crear una cuenta como usuario?</a>'
          })
        }
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Necesitas iniciar sesion para poder añadir proveedores a tu lista de favoritos',
          footer: '<a href="/Ingresar">¿Quieres iniciar sesion?</a>'
        })
      }
      
    }

    const infoDrawer = (anchor,place) => (
        
        <Box   
          sx={{
            width: 450,
          }}
          onClick={toggleDrawer(anchor, false)}
    
          >
          <div className='box-imagen-drawer'>
            <img  className='box-imagen-drawer' src={place.place.imagen_destacada} alt="Imagen " />
          </div> 
          <div className='box-nombreshop-drawer'>
            <h1 >{place.place.nombre_empresa}</h1>
          </div>
          <div className='box-location-drawer'> 
            <p>< FmdGoodIcon />{place.place.direccion}</p>
          </div>
          <div className='box-descripcion-drawer'>
            <p>{place.place.descripcion_corta}</p>
          </div>
          <div className='box-btninfo-drawer'>
            <button onClick={visitarPagina()}  className='btn-info-drawer'>Visitar Pagina</button>
          </div>
          <div className='box-btninfo-drawer'>
            <button onClick={añadirFavoritos()} className='btn-favoritos-drawer'>Añadir a Favoritos</button>
          </div>
        </Box>
    );
    
    return (
        <Marker key={place.place._id} position={place.place.ubicacion_mapa} icon={IconShop} >
        <Popup className='leaflet-popup-content-wrapper'>   
          <h3 className='name-store'>{place.place.nombre_empresa}</h3>
          <Divider/>
          <p className='desc-store'>{place.place.eslogan}</p>
          <Divider sx={{m: 1}}/>
            <div  className='text'>
                  <button className='btn-infom' variant="contained" onClick={toggleDrawer(anchor, true)} >Mas Informacion</button>
                  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                          
                    {infoDrawer(anchor, place)}

                  </Drawer>
            </div> 
        </Popup>
      </Marker>
    )
}

export default MarkerShop
