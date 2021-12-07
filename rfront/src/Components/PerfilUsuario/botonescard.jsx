import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MapIcon from '@mui/icons-material/Map';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import './vistaperfil.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { eliminarProvFavorito } from '../../services/UsuarioService';

export default function SimpleBottomNavigation({prov}) {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

  const eliminarFavorito = () => (event) =>{
    Swal.fire({
      title: 'Está Seguro de eliminar el proveedor de tus favoritos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#004F67',
      cancelButtonColor: '#666',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar de mis favoritos!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        const userId = window.sessionStorage.getItem('idUsuario');
        const userProv = prov._id;
        const token = window.sessionStorage.getItem('token');

        eliminarProvFavorito(userId,userProv,token)
        .then((response)=>{
          setValue(-1)
          console.log(response.mensaje)
          Swal.fire({
            icon: 'success',
            title: 'El proveedor se elimino correctamente',
            showConfirmButton: false,
            timer: 2000
          })
          window.location.href='/perfil'
        })
        .catch((e) => {
          console.error('No funcionó la petición');
          console.error(e);
        })

        
      }
    })
  }

  const verEnMapa = () => (event) =>{

    window.localStorage.setItem('centerLat',prov.ubicacion_mapa.lat)
    window.localStorage.setItem('centerLng',prov.ubicacion_mapa.lng)
    navigate('/mapa')
  }

  const visitarPagina = () => (event) =>{
    console.log("Visitando pagina")
    navigate('/negocio/'+prov._id)
  }

  return (
    <Box className="boxbtn"  sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={eliminarFavorito()}  label="Favorito" icon={<StarIcon />} />
        <BottomNavigationAction onClick={verEnMapa()} label="Ver en mapa" icon={<MapIcon />} />
        <BottomNavigationAction onClick={visitarPagina()} label="Visitar Pagina" icon={<InfoIcon />} />
      </BottomNavigation>
    </Box>
  );
}