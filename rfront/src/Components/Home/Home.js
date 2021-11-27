import * as React from 'react';
import './Home.css';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { shadows, sizeHeight } from '@mui/system';
import { styled } from '@mui/material/styles';
import Logo from '../../assets/Home/Logo.svg';
import pets from '../../assets/Home/pets.svg';
import logoheader from '../../assets/Home/logoheader.svg'

import AboutAs from './AboutAs';
import Section1 from './Section1';

import francis from '../../assets/Home/francis.png'
import Section2 from './Section2';


const theme = createTheme();
const mapa = '../../assets/mapa-bg.png';
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
      <div className="bg-foto-mapa">

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
            >
              {descripHeader}
            </Typography>

          </div>

        </div>
      </div>

      <main>
        {/* Here the page' sections */}
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

      </main>
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
      
    </div>

  );
}