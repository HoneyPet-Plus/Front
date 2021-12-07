import React, {useState, useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./Nav.css"
import { NavLink } from 'react-router-dom';
import logoheader from '../../assets/Home/logoheader.svg'
import { styled } from '@mui/material/styles';
import { useLocalStorage } from '../../Hooks/useLocalStorage';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#00303F"),
  backgroundColor: "#00303F",
  "&:hover": {
    backgroundColor: "#002935",
    color: "#ffffff",
  },
}));

export default function ButtonAppBar() {
  // const empresa_id = sessionStorage.getItem('empresa_id')

  const [user, setUser] = useState(true);
  const [opcionIngresar, setOpcionIngresar] = useState(false);
  const [nprov, setNprov] = useState(true);
  const [aprov, setAprov] = useState(true);

  useEffect(() => {
    if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("rol") === "proveedor"
    ) {
      if (
        sessionStorage.getItem("empresa_id") &&
        sessionStorage.getItem("empresa_id") !== "undefined"
      ) {
        setOpcionIngresar(true);
        setAprov(false);
      } else {
        setOpcionIngresar(true);
        setNprov(false);
      }
    } else if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("rol") === "usuario"
    ) {
      setUser(false);
      setOpcionIngresar(true);
    }
  }, []);

  const [userLat, setUserLat] = useLocalStorage('userLat',4.6482837)
  const [userLng, setUserLng] = useLocalStorage('userLng',-74.247894)
  
  useEffect(()=>{
      navigator.geolocation.getCurrentPosition(
          
          function(position){
  
              setUserLng(position.coords.longitude)
              setUserLat(position.coords.latitude)

              console.log(userLat, userLng)
              
          },
          function(error){
              console.log(error)
          },
          {
              enableHighAccuracy: true
          }
      );
  },[])

  const empresaURL = "/mi_pagina/" + sessionStorage.getItem('empresa_id')

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar className="pNav">
          <Typography mt variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logoheader} alt="HoneyPet +" />
          </Typography>
          {/* <Typography mt variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {empresa_id}
          </Typography > */}
          
          <ColorButton className="btnNav">
            <NavLink
              to="/inicio"
              className={({ isActive }) =>
                "btnin " + (isActive ? "active-nav" : "")
              }
            >
              Inicio
            </NavLink>
          </ColorButton>

          <ColorButton className="btnNav">
            <NavLink
              to="/mapa"
              className={({ isActive }) =>
                "btnin " + (isActive ? "active-nav" : "")
              }
            >
              Mapa
            </NavLink>
          </ColorButton>

          <ColorButton className="btnNav">
            <NavLink
              to="/proveedores"
              className={({ isActive }) =>
                "btnin " + (isActive ? "active-nav" : "")
              }
            >
              Proveedores
            </NavLink>
          </ColorButton>

          <ColorButton hidden={opcionIngresar} className="btnNav">
            <NavLink
              to="/ingresar"
              className={({ isActive }) =>
                "btnin " + (isActive ? "active-nav" : "")
              }
            >
              Ingresar
            </NavLink>
          </ColorButton>

          <ColorButton hidden={aprov} className="btnNav">
            <NavLink
              to={empresaURL}
              className={({ isActive }) =>
                "btnin " + (isActive ? "active-nav" : "")
              }
            >
              Mi Página
            </NavLink>
          </ColorButton>

          <ColorButton hidden={nprov} className="btnNav">
            <NavLink
              to="/publicar"
              className={({ isActive }) =>
                "btnin " + (isActive ? "active-nav" : "")
              }
            >
              Publicar
            </NavLink>
          </ColorButton>
          <ColorButton hidden={user} className="btnNav">
            <NavLink
              to="/perfil"
              className={({ isActive }) =>
                "btnin " + (isActive ? "active-nav" : "")
              }
            >
              Mi Perfil
            </NavLink>
          </ColorButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
