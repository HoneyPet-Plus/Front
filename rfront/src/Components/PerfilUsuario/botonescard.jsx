import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MapIcon from '@mui/icons-material/Map';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import './vistaperfil.css';
import Swal from 'sweetalert2';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const eliminarFavorito = () => (event) =>{
    console.log("Hola")
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

        setValue(-1)

        Swal.fire({
          icon: 'success',
          title: 'El proveedor se elimino correctamente',
          showConfirmButton: false,
          timer: 2000
        })

      }
    })
  }

  const verEnMapa = () => (event) =>{
    console.log("Viendo en el mapa")
    
  }

  const visitarPagina = () => (event) =>{
    console.log("Visitando pagina")
    
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