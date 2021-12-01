import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Swal from 'sweetalert2'
import Axios from 'axios'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './logform.css'

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="/Inicio">
//         HoneyPet
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const[nombre,setNombre]=useState('')
  const[correo,setCorreo]=useState('')
  const[contraseña,setContraseña]=useState('')
  const[rol,setRol]=useState([])
  const[rolSelect,setRolSelect]=useState([])

  useEffect(()=>{
    setRol(['Proveedor','Usuario'])
    setRolSelect('Usuario')
  }, [])

  const guardar = async(e)=>{
    e.preventDefault()
    const usuario = {
      nombre,
      correo,
      contraseña,
      rol:rolSelect
    }

    if(nombre===""){
      Swal.fire({
        icon: 'error',
        title: 'Debe ingresar un nombre',
        showConfirmButton: false,
        timer:1500
      })
    }
    else if(correo===""){
      Swal.fire({
        icon: 'error',
        title: 'Debe ingresar un correo',
        showConfirmButton: false,
        timer:1500
      })
    }
    else if(contraseña===""){
      Swal.fire({
        icon: 'error',
        title: 'Debe ingresar una contraseña',
        showConfirmButton: false,
        timer:1500
      })
    }
    else{

      const token = sessionStorage.getItem('token')
      const respuesta = await Axios.post('/api/usuario/create/', usuario,{
        headers:{'autorizacion':token}
      })
      const mensaje = respuesta.data.mensaje
      console.log(mensaje)

      Swal.fire({
        icon: 'success',
        title: 'usuario creado',
        showConfirmButton: false,
        timer:1500
      })

      e.target.reset();
      setNombre('')
      setCorreo('')
      setContraseña('')

    }

  }

  return (

    <ThemeProvider theme={theme}>
      <Container className='form-container' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Crear Cuenta
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={guardar}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre"
                  autoFocus
                  onChange={(e)=>setNombre(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electronico"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setCorreo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setContraseña(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tipo de Usuario *</InputLabel>
                    <Select
                    // className='form-control'
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={role}
                      label="Tipo de Usuario"
                      // onChange={handleChange}
                      onChange={(e)=>setRolSelect(e.target.value)}
                      >
                    <MenuItem value={'usuario'}>Usuario con mascota</MenuItem>
                    <MenuItem value={'proveedor'}>Negocio</MenuItem>
                    </Select>
                    {/* <MenuItem value={10}>Usuario con mascota</MenuItem>
                    <MenuItem value={20}>Negocio</MenuItem> */}
                  </FormControl>
                </Box>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear Cuenta
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href='/ingresar' variant="body2">
                  ¿Ya tienes una cuenta? Inicia Sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
