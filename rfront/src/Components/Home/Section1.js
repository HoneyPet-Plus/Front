import * as React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import pets from '../../assets/Home/pets.svg';
import empresas from '../../assets/Home/empresas.svg';
import peopleandpet from '../../assets/Home/peopleandpet.svg';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import { Box } from '@mui/system';



function card_cont(imagen, titulo, descripcion, btn) {

    return (
        <div>
            <Card
                style={{ backgroundColor: "#ffffff" }}
                sx={{ alignItems: 'center', height: '100%', borderRadius: '20px', display: 'flex', flexDirection: 'column', minWidth: 225, maxWidth: 400, minHeight: 220, maxHeight: 350, paddingTop: '20px' }}
                md={6}
            >
                <CardMedia

                    component="img"
                    sx={{
                        height: 120,
                        width: 120,
                    }}
                    md={6}
                    image={imagen}
                    alt="random" />
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
    );
}



export default function Section1(){
    
    
    return (
        <Grid container className='seccion-lideres'>
            
                <Grid sx={6} sm={6} md={6}>
                    <Stack alignItems='flex-end' margin='3%'>
                    {card_cont(pets, 'Mascotas', ' En este sitio web encontraras una lista de negocios cercanos a tu ubicación, y los mejores productos y servicios para tus mascotas.')}
                    </Stack>
                </Grid>
                <Grid sx={6} sm={6} md={6} >
                    <Stack alignItems='flex-start' margin='3%'>
                    {card_cont(empresas, 'Empresas', 'Somos un directorio especializado en productos y servicios para mascotas. Publíca tu negocio y capta nuevos clientes en tu localidad.')}
                    </Stack>
                </Grid>
        

            <div>
                <Typography variant="h4" align="center" paddingTop="50px" component="div" mb='0px'>
                    Para Líderes de Manada
                </Typography>
                <Typography variant="h5" align="center" mt='-20px'>
                    ________________________
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

                            <Button id="button-empezar" size='medium' variant="outlined">
                                <Link to='/Proveedores' className="btnin">VER DIRECTORIO</Link>
                            </Button>
                
                        </Stack>


                        <Typography fontSize='24' align="left" component="div" mb='0px'>
                            Guardar mis proveedores favoritos
                        </Typography>
                        <Typography fontSize='18' align="left" component="div" mb>
                            Si creas una cuenta como líder de manada, podrás marcar tus proveedores favoritos (mediante el botón con forma de estrella), luego      podrás encontrarlos fácilmente en la página de “Mi Perfil”, el lugar para guardar los mejóres productos o servicios para tu mascota.
                        </Typography>

                        <div>
                            <Button id="button-empezar" size='medium' variant="outlined" >
                                <Link to='/Perfil' className="btnin">CREAR CUENTA</Link>
                            </Button>
                        </div>

                    </Stack>

                    <Stack>
                        <img className='img-people-pet' src={peopleandpet} alt="peopleandpet" />
                    </Stack>

                </Stack>

            </div>
        </Grid>
    )

}