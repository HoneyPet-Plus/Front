import * as React from 'react';
import './Home.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import seccioempresas from '../../assets/Home/seccioempresas.svg';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { color } from '@mui/system';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#ffffff'),
  backgroundColor: 'transparent',
  border: '1.5px solid',
  borderColor: '#ffffff',
  '&:hover': {
    // backgroundColor: '#aecac0',
    borderColor:'#ffffff'
  },
}));

const BtnAmarillo = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#004F67'),
  backgroundColor: '#F7C331',
  border: '1.5px solid',
  borderColor: '#F7C331',
  '&:hover': {
    backgroundColor: '#F7C331',
    borderColor:'#F7C331',
    color:'#004F67',
    opacity: '70%',
  },
}));


export default function Section2(){
    return(
        <Stack id='dos' className='seccion-empresas' justifyContent='center'>
          <Typography className='figma-headers' color='#ffffff' variant="h4" align="center" paddingTop="50px" component="div" mb='0px'>
            Para Empresas de Sector Mascotas
          </Typography>
          <Typography color='#ffffff' variant="h5" align="center" mt='-20px'>
            _____________________________________
          </Typography>
          <Typography color='#ffffff' variant="h5" align="center" component="div" mb='40px'>
            ¿Cómo funciona?
          </Typography>

          <Stack className='empresas' direction='row-reverse' justifyContent='center' spacing={4} marginX='100px'>

            <Stack>
              <Typography color='#ffffff' fontWeight="bold" fontSize='20px' align="left" component="div" mb>
                Crear una cuenta
              </Typography>

              <Typography color='#ffffff' fontSize='18' align="left" component="div" mb='30px'>
                Para publicar tu negocio primero deberás crear una cuenta como “Negocio Proveedor”, luego podrás iniciar el proceso desde la página “Mi Perfil”.
              </Typography>

              <Typography color='#ffffff' fontWeight="bold" fontSize='20px' align="left" component="div" mb>
                Crear y administrar tu página
              </Typography>

              <Typography color='#ffffff' fontSize='18' align="left" component="div" mb>
              Luego, deberas diligenciar el formulario que esta dividido en tres secciónes:
              </Typography>

              <Typography color='#ffffff' fontSize='18' align="left" component="div" mb>
                <ol className='items-e'>

                  <li className='items-empresa' >Información de la Empresa</li>
                  <li className='items-empresa' >Productos / Servicios</li>
                  <li className='items-empresa' >Datos de Contacto</li> 

                </ol>

                Una vez creada tu página de negocio podrás administrarla (Editar información o eliminar la cuenta) desde la página “Mi Perfil”.
              </Typography>

              <Stack direction='row' spacing={4} mt>
                
                <ColorButton size='medium' >
                  <Link to='/demo_pagina' className="btn-blanco">VER UNA DEMO</Link>
                </ColorButton>

                <BtnAmarillo size='medium' >
                  <Link to='/registrar' className="btn-amarillo">CREAR CUENTA</Link>
                </BtnAmarillo>
                
              </Stack>

            </Stack>

            <Stack>
              <img className='img-people-pet' src={seccioempresas} alt="peopleandpet" />
            </Stack>

          </Stack>

        </Stack>
        
    )
}