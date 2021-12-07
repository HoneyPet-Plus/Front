import React, { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; 
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import Swal from 'sweetalert2';

function Userbar() {
  const salir=()=>{

    sessionStorage.clear()
    window.location.href='/'

  }

  const eliminarUsuario = () => (event) =>{
    console.log("Hola")
    Swal.fire({
      title: 'Está Seguro de Cerrar Sessión?',
      text: "Para administrar su página deberá iniciar sessión nuevamente!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#004F67',
      cancelButtonColor: '#666',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, cerrar sesión!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Se cerró su sesión exitosamente',
          showConfirmButton: false,
          timer: 2000
        })

        window.location.href='/'
      }
    })
  }

    return (
        <div className="bar-container">
            <Box className='cont' sx={{ flexGrow: 1 }}>
              <AppBar position="static" color="action">
                <Toolbar>
                  <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    
                  >
                    <AccountCircleIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{sessionStorage.getItem('nombre')}</Typography>
                  <IconButton
                    size="large"
                    aria-label="menu"
                    sx={{ color: "FireBrick" }}
                    onClick={eliminarUsuario()}
                  >
                    <Tooltip title="Borrar Perfil" arrow>
                      <DeleteForeverIcon />
                    </Tooltip>
                  </IconButton>

                  <IconButton
                    onClick={()=>salir()}
                    to='/'
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <Tooltip title="Cerrar Sesión" arrow>
                      <LogoutIcon />
                    </Tooltip>
                  </IconButton>
                </Toolbar>
              </AppBar>
            </Box>
        </div>
    );
}

export default Userbar;
