import * as React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import peopleandpet from '../../assets/Home/peopleandpet.svg';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';



export default function Section1(){
    
    
    return (
        <Grid container alignItems='center' justifyContent='center' className='seccion-lideres' paddingLeft='10%'  pb='5%'>
      
                    <Grid sx={12} sm={12} md={6}>
                        <Typography fontSize='24' align="left" component="div" mb='0px'>
                            Encontrar proveedores cercanos
                        </Typography>

                        <Typography fontSize='18' align="left" component="div" mb='0px'>
                            Es necesario conceder los  permisos de ubicación que solicita el navegador, para mejorar tu experiencia usando la aplicación y ver los negocios cercanos que ofrecen los mejores productos y servicios para tus mascotas.
                        </Typography>

                        <Typography fontSize='18' align="left" component="div" mb='0px'>
                            Puesdes ver un listado de proveedores cercanos desde la página de “Proveedores” o los puedes geo-referenciar desde la página de “Mapa”, cuando un negocio te llame la atención puedes ampliar la información y ver su página con productos, servicios, datos de contacto, etc.
                        </Typography>

                        <Stack direction='row' spacing={1} mt mb>

                            <Button id="button-empezar" size='medium' variant="outlined" >
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
                                <Link to='/registrar' className="btnin">CREAR CUENTA</Link>
                            </Button>
                        </div>

                    </Grid>

                    <Grid sx={12} sm={12} md={6} justifyContent='center' className='imagen-people-pet'>
                        <img className='img-people-pet' src={peopleandpet} alt="peopleandpet" />
                    </Grid>

        </Grid>
    )

}