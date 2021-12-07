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
import { deleteProvById } from '../../services/NegocioService';
import { useLocalStorage } from '../../Hooks/useLocalStorage';



function ProvAdminBar({email}) {
  const navigate = useNavigate();
  
  const [inputColor, setInputColor] = useLocalStorage('bizColor', '#00ff00')

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
        localStorage.removeItem('bizDesc');
        localStorage.removeItem('bizDescription');
        localStorage.removeItem('bizDir');
        localStorage.removeItem('bizEmail');
        localStorage.removeItem('bizHour');
        localStorage.removeItem('bizName');
        localStorage.removeItem('bizOtro');
        localStorage.removeItem('bizPS2desc');
        localStorage.removeItem('bizPS2title');
        localStorage.removeItem('bizPS2type');
        localStorage.removeItem('bizPS3desc');
        localStorage.removeItem('bizPS3title');
        localStorage.removeItem('bizPS3type');
        localStorage.removeItem('bizPSEdesc');
        localStorage.removeItem('bizPSEtitle');
        localStorage.removeItem('bizPSEtype');
        localStorage.removeItem('bizSlogan');
        localStorage.removeItem('bizTel');
        localStorage.removeItem('bizWeb');
        localStorage.removeItem('bizLat');
        localStorage.removeItem('bizLng');
        sessionStorage.clear();
        window.location.href='/'
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
        // Aqui va la petición delete
        const pageId = window.sessionStorage.getItem('empresa_id');
        const userId = window.sessionStorage.getItem('idUsuario');
        const token = window.sessionStorage.getItem('token');
        deleteProvById(pageId,userId,token)
          .then((response)=>{
            console.log('Se borro con exito!!!')
            console.log(response)
            window.sessionStorage.removeItem('empresa_id')
            Swal.fire({
              icon: 'success',
              title: 'Se eliminó su página exitosamente',
              showConfirmButton: false,
              timer: 2000
            })
            window.location.href='/inicio'

          })
          .catch((e) => {
            console.error('No funcionó la petición');
            console.error(e);
            Swal.fire({
              icon: 'error',
              title: 'No se completo la petición',
              showConfirmButton: false,
              timer: 2000
            })
          })   
      }
    })
  }

  const handleEditPageData = () => {
    Swal.fire({
      title: '¿Desea dditar los datos de la página?',
      text: "Se cargarán los datos actuales en el formulario y solo se actualizarán cuanto se completen los tres pasos.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#004F67',
      cancelButtonColor: '#666',
      confirmButtonText: 'Si, Editar Datos!',
      cancelButtonText: 'No, Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'info',
          title: 'Cargando Datos al Formulario...',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true
        })
        navigate('/publicar')
     
      }
    })

    
  }

  const handleUploadImg = async () => {
    // TODO: hacer la conexión con el back y el refresh
    const { value: file } = await Swal.fire({
      title: 'Selecciona la imagen',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Actualizar Imagen',
      confirmButtonColor: '#004F67',
      cancelButtonText:'Cancelar',
      cancelButtonColor: '#666',
      input: 'file',
      inputAttributes: {
        'accept': 'image/*',
        'aria-label': 'Subir Imagen destacada'
      }
    })

    if (file) {
      // TODO: aquí va la petición para actualizar la imagen
      console.log('Se confirmó Actualizar Imagen...')
    
      const reader = new FileReader()
      reader.onload = (e) => {
        Swal.fire({
          title: 'La imagen subida',
          imageUrl: e.target.result,
          imageAlt: 'Imagen destacada subida'
        })
      }
      reader.readAsDataURL(file)
    } 
    
    
  }

  const handleChangeTheme = () => {

    Swal.fire({
      title: 'Cambiar color de la página',
      html: `<label for="themeInput">Seleccione un tono oscuro: </label> <input onChange={e => setInputColor(e.target.value)} id="themeInput" type="color" value=${inputColor}>`,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: 'Cambiar Color',
      confirmButtonColor: '#004F67',
      cancelButtonText:'Cancelar',
      cancelButtonColor: '#666',
    }).then((result) => {
      if (result.isConfirmed) {
        // Aqui va la petición actualizar color
        console.log('Se confirmó Cambiar Color...')
          
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
                    onClick={handleChangeTheme}
                    size="large"
                    color="inherit"
                    aria-label="menu"
                  >
                    <Tooltip title="Cambiar Colores" arrow>
                      <FormatColorFillIcon />
                    </Tooltip>
                  </IconButton>
                  
                  <IconButton 
                    onClick={handleUploadImg}
                    size="large"
                    color="inherit"
                    aria-label="menu"
                  >
                    <Tooltip title="Cambiar Imagen" arrow>
                      <PanoramaIcon />
                    </Tooltip>
                  </IconButton>

                  <IconButton
                    onClick={handleEditPageData}
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
