import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import "./Nav.css"
import { Link } from 'react-router-dom';
import logoheader from '../../assets/Home/logoheader.svg'


export default function ButtonAppBar() {

  const [state, setstate] = useState({
    longitud:4.627354,
    latitud:-74.082807,
    zoom: 13,
    minZoom: 5  
  })


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
        function(position){
            setstate({
                longitud:position.coords.longitude,
                latitud: position.coords.latitude,
                zoom: 18,
                minZoom: 8 
            })
            window.localStorage.setItem('userLng', position.coords.longitude);
            window.localStorage.setItem('userLat', position.coords.latitude);
        },
        function(error){
            console.log(error)
        },
        {
            enableHighAccuracy: true
        }
    );
  },[])


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position='fixed'>
        <Toolbar className="pNav">
          <Typography mt variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logoheader} alt="HoneyPet +" />
          </Typography >
          
          <Button color="inherit" className="btnNav"><Link to='/Inicio' className="btnin">Inicio</Link></Button>
          |
          <Button color="inherit" className="btnNav"><Link to={{pathname:'/Mapa',state}} className="btnin">Mapa</Link></Button>
          |
          <Button color="inherit" className="btnNav"><Link to='/Proveedores' className="btnin">Proveedores</Link></Button>
          |
          <Button color="inherit" className="btnNav"><Link to='/Ingresar' className="btnin">Ingresar</Link></Button>
          {/* <Button color="inherit" className="btnNav"><Link to='/Perfil' className="btnin">Ingresar</Link></Button> */}
          |
          {/*TODO Borrar al integrar */}
          <Button color="inherit" className="btnNav"><Link to='/Pagina' className="btnin">Pagina</Link></Button>
          |
          <Button color="inherit" className="btnNav"><Link to='/Publicar' className="btnin">Publicar</Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}