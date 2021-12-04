import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; 
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PanoramaIcon from '@mui/icons-material/Panorama';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function ProvAdminBar({email}) {
  const navigate = useNavigate();

  const handleLogOut = () => {
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
        sessionStorage.clear()
        navigate('/', { replace:true })
      }
    })

  }

  const handleDeletePage = () => {
    Swal.fire({
      title: 'Borrar Página',
      text: "¡ADVERTENCIA! -> Esta acción no se puede revertir, ¿Está Seguro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#666',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No, Cancelar',
      confirmButtonText: 'Si, Borrar Mi Página!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Se eliminó su página exitosamente',
          showConfirmButton: false,
          timer: 2000
        })
        // Aqui va la petición delete
        navigate('/publicar', { replace:true })
      }
    })
  }



    return (
        <div className="bar-container">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="relative" color="action">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <BusinessIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{email}</Typography>

                  <IconButton 
                    onClick={handleDeletePage}
                    size="large"
                    aria-label="menu"
                    sx={{ color: "FireBrick" }}
                  >
                    <Tooltip title="Borrar Página" arrow>
                      <DeleteForeverIcon />
                    </Tooltip>
                  </IconButton>

                  <IconButton
                    onClick={handleLogOut}
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

                  <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                  >
                    <Tooltip title="Cambiar Colores" arrow>
                      <FormatColorFillIcon />
                    </Tooltip>
                  </IconButton>
                  
                  <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                  >
                    <Tooltip title="Cambiar Imagen" arrow>
                      <PanoramaIcon />
                    </Tooltip>
                  </IconButton>

                  <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                  >
                    <Tooltip title="Editar Datos" arrow>
                      <BorderColorIcon />
                    </Tooltip>
                  </IconButton>

                </Toolbar>
              </AppBar>
            </Box>
        </div>
    );
}

export default ProvAdminBar;
