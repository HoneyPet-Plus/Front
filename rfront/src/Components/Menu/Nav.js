import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./Nav.css"
import { Link } from 'react-router-dom';
import logoheader from '../../assets/Home/logoheader.svg'
import { styled } from '@mui/material/styles';
// import Axios from 'axios'

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00303F'),
  backgroundColor: '#00303F',
  '&:hover': {
    backgroundColor: '#002935',
    color:'#fff'

  },
}));


export default function ButtonAppBar() {

 
  // const empresa_id = sessionStorage.getItem('empresa_id')
  
  const [user, setUser]= useState(true)
  const [opcionIngresar, setOpcionIngresar]= useState(false)
  const [nprov, setNprov]= useState(true)
  const [aprov, setAprov]= useState(true)
  

  useEffect(() => {

    if (sessionStorage.getItem('token') && sessionStorage.getItem('rol')==='proveedor' ) {
      if (sessionStorage.getItem('empresa_id') && sessionStorage.getItem('empresa_id')!= 'undefined' ) { 
        setOpcionIngresar(true)
        setAprov(false)

      } else {
        setOpcionIngresar(true)
        setNprov(false)
      }

    }else if(sessionStorage.getItem('token') && sessionStorage.getItem('rol')==='Usuario' ){
      setUser(false)
      setOpcionIngresar(true)
    }

  }, [])

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
          {/* <Typography mt variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {empresa_id}
          </Typography > */}
          
          <ColorButton className="btnNav"><Link to='/Inicio' className="btnin">Inicio</Link></ColorButton>
          
          <ColorButton className="btnNav"><Link to={{pathname:'/Mapa',state}} className="btnin">Mapa</Link></ColorButton>
          
          <ColorButton className="btnNav"><Link to='/Proveedores' className="btnin">Proveedores</Link></ColorButton>
          
          <ColorButton hidden={opcionIngresar} className="btnNav"><Link to='/Ingresar' className="btnin">Ingresar</Link></ColorButton>
          
          <ColorButton hidden={aprov} className="btnNav"><Link to='/Pagina' className="btnin">Mi Página</Link></ColorButton>
          
          <ColorButton hidden={nprov} className="btnNav"><Link to='/Publicar' className="btnin">Publicar</Link></ColorButton>
          <ColorButton hidden={user} className="btnNav"><Link to='/Perfil' className="btnin">Mi perfil</Link></ColorButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
}