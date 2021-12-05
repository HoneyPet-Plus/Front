import * as React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Logo from '../../assets/Home/Logo.svg';
import logoheader from '../../assets/Home/logoheader.svg'

import Cards from './Cards';
import Section1 from './Section1';
import Section2 from './Section2';
import AboutAs from './AboutAs';

import { Box } from '@mui/system';

const descripHeader = "Ayudamos a nuestros usuarios a encontrar los mejores proveedores de servicios para mascotas desde cualquier parte del país."

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00303F'),
  backgroundColor: '#00303F',
  '&:hover': {
    backgroundColor: '#00303F',
  },
}));


export default function Home() {
  return (
    <div className='all-page'>
      <CssBaseline/>
      <Grid container xs={12} sm={12} md={12}>
        <Grid sx={12} sm={12} md={12}>
          <Box className="bg-foto-mapa">

            <div className="bg-para-mapa">
              <div className='contenido-header'>
                <Stack className="logo-principal" alignItems='center'>
                  <div>
                    <img src={Logo} alt="HoneyPet +" />
                  </div>
                </Stack>

                <Typography
                  component="div"
                  variant="body1"
                  align="center"
                  color="#CAE4DB"
                  fontSize="12px"
                  marginLeft="10%"
                  marginRight="10%"
                  gutterBottom
                  mt
                >
                  {descripHeader}
                </Typography>

              </div>

            </div>
          </Box>

        </Grid>

      <Grid sx={12} sm={12} md={12}>

        <Cards/>
        <Section1/>

        <Section2/>

        <Stack className='seccion-about-as' justifyContent='center'>
          <Typography variant="h4" align="center" paddingTop="50px" component="div" mb='0px'>
            Sobre el Proyecto
          </Typography>
          <Typography variant="h5" align="center" mt='-20px'>
            __________________________
          </Typography>
          <Typography variant="h6" align="center" component="div" mb='40px'>
            Equipo de Trabajo
          </Typography>

          <Stack className='nosotros' justifyContent='center' alignItems='center' marginX='100px'>

            <AboutAs/>

          </Stack>

        </Stack>
        

      </Grid>

      <Box sx={{ bgcolor: '#004F67', p: 6, marginTop:'3%' }} component="footer">
        <Stack direction='row' spacing={7} alignItems='center' paddingX='2%'>
        <Typography align="center" color="#7A9D96" mt>
        <img src={logoheader} width='300px' alt="HoneyPet +" />
        </Typography>
        <Typography
        variant="subtitle1"
        color="#CAE4DB"
        component="p"
        >
        HoneyPet + es un proyecto que nace como ejercicio y muestra de las habilidades adquiridas durante el cuarto ciclo del diplomado en programación MisionTIC2022, impartido por la Universidad Tecnológica de Pereira UTP y el Ministerio de Tecnologías de la Información y las Comunicaciones de Colombia (MinTIC).
        </Typography>
        <Typography
        variant="subtitle1"
        color="#CAE4DB"
        component="p"
        >
        Descargo de Responsabilidad:
        
        Esta Aplicación Web es un proyecto con fines demostrativos, abstengase de usar sus datos personales (reales) dentro de la aplicación.
        </Typography>
        
        </Stack>
      </Box>
      </Grid>
    </div>

  );
}