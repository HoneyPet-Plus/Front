// import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './logform.css'
import React, { useState } from 'react';
import Axios from 'axios'
import Swal from 'sweetalert2'

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="/Inicio">
//         HoneyPet
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function Ingresar() {

  
  const [correo,setCorreo]= useState('')
  const [contraseña,setContraseña]= useState('')
  

  const login=async(e)=>{
    
    e.preventDefault();
    const usuario={correo,contraseña}
    const respuesta = await Axios.post('/api/usuario/login',usuario);
    console.log(respuesta)
    const mensaje = respuesta.data.mensaje
    const rol = respuesta.data.rol

    if(mensaje!=='Bienvenidos'){
      
      Swal.fire({
        icon:'error',
        title: mensaje,
        showConfirmButton: false,
        timer:3000 
      })

    } else if(rol == 'proveedor'){
      console.log(respuesta.data)
      const token = respuesta.data.token
      const nombre = respuesta.data.nombre
      const idUser = respuesta.data.idUser
      const correo = respuesta.data.correo
      const rol = respuesta.data.rol


      sessionStorage.setItem('token',token)
      sessionStorage.setItem('nombre',nombre)
      sessionStorage.setItem('idUsuario',idUser)
      sessionStorage.setItem('correo',correo)
      sessionStorage.setItem('rol',rol)

      Swal.fire({
        icon:'success',
        title: `Bienvenido ${nombre}`,
        showConfirmButton: false,
        timer:3000
      })
      window.location.href='/Pagina'

    } else{
      console.log(respuesta.data)
      const token = respuesta.data.token
      const nombre = respuesta.data.nombre
      const idUser = respuesta.data.idUser
      const correo = respuesta.data.correo
      const rol = respuesta.data.rol


      sessionStorage.setItem('token',token)
      sessionStorage.setItem('nombre',nombre)
      sessionStorage.setItem('idUsuario',idUser)
      sessionStorage.setItem('correo',correo)
      sessionStorage.setItem('rol',rol)

      Swal.fire({
        icon:'success',
        title: `Bienvenido ${nombre}`,
        showConfirmButton: false,
        timer:1500
      })
      window.location.href='/perfil'

    }

  }



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className='form-container' component="main" maxWidth="xs">
        <CssBaseline />
        <Box 
          sx={{
            paddingTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesión
          </Typography>
          <Box component="form" onSubmit={login} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electronico"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setCorreo(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setContraseña(e.target.value)}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 5 }}
            >
              Iniciar Sesión
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/registrar" variant="body2">
                  {"¿No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}