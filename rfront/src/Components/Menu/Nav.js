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
import { styled } from '@mui/material/styles';
import { getAllProvs } from '../../services/NegocioService';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00303F'),
  backgroundColor: '#00303F',
  '&:hover': {
    backgroundColor: '#002935',
    color:'#fff'

  },
}));


export default function ButtonAppBar() {

  const [provee, setProvee]= useState(true)
  const [user, setUser]= useState(true)
  const [opcionIngresar, setOpcionIngresar]= useState(false)
  const [ambos, setAmbos]= useState(true)
  

  useEffect(() => {

    if (sessionStorage.getItem('token') && sessionStorage.getItem('rol')=='proveedor' ) {
      setProvee(false)
      setOpcionIngresar(true)
      setAmbos(false)

    }else if(sessionStorage.getItem('token') && sessionStorage.getItem('rol')=='Usuario' ){
      setUser(false)
      setOpcionIngresar(true)
      setAmbos(false)
    }

  }, [])
  
  // const salir= ()=>{
  //   sessionStorage.clear()
  //   window.location.href='/'
  // }





  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
        
      function(position){

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


  function enviarProveedores(e) {
    
    e.preventDefault();

    getAllProvs().then((response)=>{

      window.localStorage.setItem('proveedores', JSON.stringify(response.data));

    }).catch((e) => {
      console.error('No funcionó la petición' + e);
    })
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position='fixed'>
        <Toolbar className="pNav">
          <Typography mt variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logoheader} alt="HoneyPet +" />
          </Typography >
          
          <ColorButton className="btnNav"><Link to='/Inicio' className="btnin">Inicio</Link></ColorButton>
          
          <ColorButton onClick={enviarProveedores} className="btnNav"><Link to='/Mapa' className="btnin">Mapa</Link></ColorButton>
          
          <ColorButton className="btnNav"><Link to='/Proveedores' className="btnin">Proveedores</Link></ColorButton>
          
          <ColorButton hidden={opcionIngresar} className="btnNav"><Link to='/Ingresar' className="btnin">Ingresar</Link></ColorButton>
          
          <ColorButton hidden={ambos} className="btnNav"><Link to='/Pagina' className="btnin">Pagina</Link></ColorButton>
          
          <ColorButton hidden={provee} className="btnNav"><Link to='/Publicar' className="btnin">Publicar</Link></ColorButton>
          <ColorButton hidden={user} className="btnNav"><Link to='/Perfil' className="btnin">Mi perfil</Link></ColorButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}