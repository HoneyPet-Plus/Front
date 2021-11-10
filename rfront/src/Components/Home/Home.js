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
import { shadows } from '@mui/system';
import { styled } from '@mui/material/styles';


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

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#00303F'),
    backgroundColor: '#00303F',
    '&:hover': {
      backgroundColor: '#00303F',
    },
  }));

  
export default function Home(){
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="bg-foto-mapa">

          <div className= "bg-para-mapa">

          <Box className="menu-p" sx={{ flexGrow: 1 }}>
              <AppBar position="static" style={{ background: '#00303F'}}>
                  <Toolbar>

                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                          HoneyPet +
                      </Typography>
                      <Button color="inherit">Home</Button>
                      <p> | </p>
                      <Button color="inherit">Mapa</Button>
                      <p> | </p>
                      <Button color="inherit">Proveedores</Button>
                      <p> | </p>
                      <Button color="inherit">Mi cuenta</Button>
                  </Toolbar>
              </AppBar>
          </Box>

          <Typography className="title-p"
            component="h1"
            variant="h2"
            align="center"
            color="#F7CC31"
            fontSize="98px"
          >
            HoneyPet +
          </Typography>

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

          <Stack alignItems="center" mt >
            <Button id="button-empezar" variant="outlined" href="https://www.google.com">
              Empezar
            </Button>
          </Stack>

          </div>
        </div>

      <main>
        {/* Hero unit */}
        <Typography variant="h5" align="center"paddingTop="10px" gutterBottom component="div">
        Vive la mejor experiencia con HoneyPet +
        </Typography>
        <Typography fontSize="12px" align="center" gutterBottom component="div">
        ¡Nuestros Proveedores poseen una gran variedad de servicios!
        </Typography>

        <Stack direction="row" spacing={2} marginX="20%" mt="15px" mb="15px">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card 
                  style={{backgroundColor: "#CAE4DB"}}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
        
                    component="img"
                    // sx={{
                    //   // 16:9
                    //   pt: '2.25%',
                    // }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Servicio
                    </Typography>
                    <Typography>
                      Acá va una breve descripción del servicio que se brindará. Y si quiere ver la información completa debe clickear en el botón
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
        
        <Stack alignItems="center">
          <ColorButton variant="contained">Ver Proveedores</ColorButton>
        </Stack>

        <div className="seccion2">
          <Typography variant="h5" color="#373F41" align="center"paddingTop="10px" gutterBottom component="div">
          ¿Cómo funciona?
          </Typography>
          <Stack direction="row" spacing={2}>
            <Stack direction="column" alignItems="center" justifyContent="flex-start" spacing={2}>   
              <Typography variant="h6" color="#373F41" paddingTop="10px" gutterBottom component="div">
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi.
              </Typography>
              <Typography variant="h6" color="#373F41" paddingTop="10px" gutterBottom component="div">
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi.
              </Typography>
              <Typography variant="h6" color="#373F41" paddingTop="10px" gutterBottom component="div">
                Eos tota dicunt democritum no. Has natum gubergren ne. Est viris soleat sadipscing cu. Legere epicuri insolens eu nec, dicit virtute urbanitas id nam, qui in habeo semper eligendi.
              </Typography>
              </Stack>
            <Container>
              <CardMedia

                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
              />
            </Container>

          </Stack>

        </div>

        <div className="seccion3">
          <Typography variant="h5" color="#373F41" paddingTop="10px" gutterBottom component="div">
            ¿Quieres ser parte de nuestro equipo de Proveedores?
          </Typography>
          <Typography variant="h6" color="#373F41" paddingTop="10px" gutterBottom component="div">
          HoneyPet + cree en ti y comparte tu sueño, queremos acompañarte impulsando tu negocio, acercandote ...Et has minim elitr  ad, nst audiam animal molestiae te. Ex duo eripuit mentitum.Et has minim elitr intellegat. Mea aeterno eleifend s minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum. Listo para empezar? 
          </Typography>

        </div>






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