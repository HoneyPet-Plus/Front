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
import empresas from '../../assets/Home/empresas.svg';
import peopleandpet from '../../assets/Home/peopleandpet.svg';
import seccioempresas from '../../assets/Home/seccioempresas.svg';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import AboutAs from './AboutAs';

import francis from '../../assets/Home/francis.png'



function Copyright() {

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];

const theme = createTheme();
const mapa = '../../assets/mapa-bg.png';
const descripHeader = "Ayudamos a nuestros usuarios a encontrar los mejores proveedores de servicios para mascotas desde cualquier parte del país."
const card_cont = (imagen, titulo, descripcion, btn) => {
  return (
    <div>
      <Card
        style={{ backgroundColor: "#ffffff" }}
        sx={{ alignItems: 'center', height: '100%', borderRadius: '20px', display: 'flex', flexDirection: 'column', minWidth: 225, maxWidth: 400, minHeight: 220, maxHeight: 350, paddingTop: '20px' }}
      >
        <CardMedia

          component="img"
          sx={{
            height: 120,
            width: 120,
          }}
          image={imagen}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography align='center' gutterBottom variant="h5" component="h2">
            {titulo}
          </Typography>
          <Typography align='center'>
            {descripcion}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00303F'),
  backgroundColor: '#00303F',
  '&:hover': {
    backgroundColor: '#00303F',
  },
}));


export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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

            {/* <Stack alignItems="center" mt >
                <Button id="button-empezar" variant="outlined" href="https://www.google.com">
                  Empezar
                </Button>
              </Stack> */}
          </div>

        </div>
      </div>

      <main>
        {/* Hero unit */}
        <Stack className='seccion-lideres' justifyContent='center'>

          <Stack direction='row' justifyContent='center' spacing={4}>
            {card_cont(pets, 'Mascotas', ' En este sitio web encontraras una lista de negocios cercanos a tu ubicación, y los mejores productos y servicios para tus mascotas.')}
            {card_cont(empresas, 'Empresas', 'Somos un directorio especializado en productos y servicios para mascotas. Publíca tu negocio y capta nuevos clientes en tu localidad.')}
          </Stack>

          <div>
            <Typography variant="h4" align="center" paddingTop="50px" component="div" mb='0px'>
              Para Líderes de Manada
            </Typography>
            <Typography variant="h5" align="center" mt='-20px'>
              __________________________
            </Typography>
            <Typography variant="h6" align="center" component="div" mb='20px'>
              ¿Cómo funciona?
            </Typography>

            <Stack className='lideres' direction='row' justifyContent='center' spacing={4} marginX='100px'>

              <Stack>
                <Typography fontSize='24' align="left" component="div" mb='0px'>
                  Encontrar proveedores cercanos
                </Typography>

                <Typography fontSize='18' align="left" component="div" mb='0px'>
                  Es necesario conceder los  permisos de ubicación que solicita el navegador, para mejorar tu experiencia usando la aplicación y ver los negocios cercanos que ofrecen los mejores productos y servicios para tus mascotas.
                </Typography>

                <Typography fontSize='18' align="left" component="div" mb='0px'>
                  Puesdes ver un listado de proveedores cercanos desde la página de “Proveedores” o los puedes geo-referenciar desde la página de “Mapa”, cuando un negocio te llame la atención puedes ampliar la información y ver su página con productos, servicios, datos de contacto, etc.
                </Typography>

                <Stack direction='row' spacing={1} mt>
                  <Button id="button-empezar" variant="outlined" href="https://www.google.com">
                    VER MAPA
                  </Button>
                  <Button id="button-empezar" variant="outlined" href="https://www.google.com">
                    VER DIRECTORIO
                  </Button>
                </Stack>


                <Typography fontSize='24' align="left" component="div" mb='0px'>
                  Guardar mis proveedores favoritos
                </Typography>
                <Typography fontSize='18' align="left" component="div" mb>
                  Si creas una cuenta como líder de manada, podrás marcar tus proveedores favoritos (mediante el botón con forma de estrella), luego      podrás encontrarlos fácilmente en la página de “Mi Perfil”, el lugar para guardar los mejóres productos o servicios para tu mascota.
                </Typography>

                <div>
                  <Button id="button-empezar" size='medium' variant="outlined" href="https://www.google.com">
                    CREAR CUENTA
                  </Button>
                </div>

              </Stack>

              <Stack>
                <img className='img-people-pet' src={peopleandpet} alt="peopleandpet" />
              </Stack>

            </Stack>

          </div>

        </Stack>





        <Stack className='seccion-empresas' justifyContent='center'>
          <Typography variant="h4" align="center" paddingTop="50px" component="div" mb='0px'>
            Para Empresas de Sector Mascotas
          </Typography>
          <Typography variant="h5" align="center" mt='-20px'>
            __________________________
          </Typography>
          <Typography variant="h6" align="center" component="div" mb='40px'>
            ¿Cómo funciona?
          </Typography>

          <Stack className='empresas' direction='row-reverse' justifyContent='center' spacing={4} marginX='100px'>

            <Stack>
              <Typography fontSize='24' align="left" component="div" mb='0px'>
                Crear una cuenta
              </Typography>

              <Typography fontSize='18' align="left" component="div" mb='0px'>
                Para publicar tu negocio primero deberás crear una cuenta como “Negocio Proveedor”, luego podrás iniciar el proceso desde la página “Mi Perfil”.
              </Typography>

              <Typography fontSize='24' align="left" component="div" mb='0px'>
                Crear y administrar tu página
              </Typography>

              <Typography fontSize='18' align="left" component="div" mb='0px'>
                Luego, deberas diligenciar el formulario que esta dividido en tres secciónes:

                1. Información de la Empresa
                2. Productos / Servicios
                3. Datos de Contacto

                Una vez creada tu página de negocio podrás administrarla (Editar información o eliminar la cuenta) desde la página “Mi Perfil”.
              </Typography>

              <Stack direction='row' spacing={1} mt>
                <Button id="button-empezar" variant="outlined" href="https://www.google.com">
                  VER UNA DEMO
                </Button>
                <Button id="button-empezar" variant="outlined" href="https://www.google.com">
                  CREAR CUENTA
                </Button>
              </Stack>

            </Stack>

            <Stack>
              <img className='img-people-pet' src={seccioempresas} alt="peopleandpet" />
            </Stack>

          </Stack>

        </Stack>





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
      {/* Footer */}
      <Box sx={{ bgcolor: '#00303F', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom color="#7A9D96">
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="#7A9D96"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>

  );
}