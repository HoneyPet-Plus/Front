import * as React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import peopleandpet from '../../assets/Home/peopleandpet.svg';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#004F67'),
  backgroundColor: 'transparent',
  border: '1.5px solid',
  borderColor: '#004F67',
  '&:hover': {
    // backgroundColor: '#aecac0',
    borderColor:'#004F67'
  },
}));

export default function Section1(){
    
    
    return (
        <Grid container alignItems='center' justifyContent='center' className='seccion-lideres' paddingLeft='10%'  pb='5%'>
      
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography color='#004F67' fontWeight="bold" fontSize='20px' align="left" component="div" mb>
                            Encontrar proveedores cercanos
                        </Typography>

                        <Typography color='#004F67' fontSize='18' align="left" component="div" mb>
                            Es necesario conceder los  permisos de ubicación que solicita el navegador, para mejorar tu experiencia usando la aplicación y ver los negocios cercanos que ofrecen los mejores productos y servicios para tus mascotas.
                        </Typography>

                        <Typography color='#004F67' fontSize='18' align="left" component="div" mb>
                            Puesdes ver un listado de proveedores cercanos desde la página de “Proveedores” o los puedes geo-referenciar desde la página de “Mapa”, cuando un negocio te llame la atención puedes ampliar la información y ver su página con productos, servicios, datos de contacto, etc.
                        </Typography>

                        <Stack direction='row' spacing={1} mt mb='25px'>

                            <ColorButton size='medium'  >
                                <Link to='/proveedores' className="btnin">VER DIRECTORIO</Link>
                            </ColorButton>
                
                        </Stack>


                        <Typography color='#004F67' fontWeight="bold" fontSize='20px' align="left" component="div" mb>
                            Guardar mis proveedores favoritos
                        </Typography>
                        <Typography color='#004F67' fontSize='18' align="left" component="div" mb>
                            Si creas una cuenta como líder de manada, podrás marcar tus proveedores favoritos (mediante el botón con forma de estrella), luego      podrás encontrarlos fácilmente en la página de “Mi Perfil”, el lugar para guardar los mejóres productos o servicios para tu mascota.
                        </Typography>

                        <div>
                            <ColorButton size='medium' >
                                <Link to='/registrar' className="btnin">CREAR CUENTA</Link>
                            </ColorButton>
                        </div>

                    </Grid>

                    <Grid item xs={12} sm={12} md={6} justifyContent='center' className='imagen-people-pet'>
                        <img className='img-people-pet' src={peopleandpet} alt="peopleandpet" />
                    </Grid>

        </Grid>
    )

}