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
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#004F67'),
    backgroundColor: 'transparent',
    border: '1.5px solid',
    borderColor: '#004F67',
    '&:hover': {
        // backgroundColor: '#aecac0',
        borderColor: '#004F67'
    },
}));

function card_cont(imagen, titulo, descripcion, donde, btname) {

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
                    <Typography color='#004F67' className='figma-headers' align='center' gutterBottom variant="h5" component="h2">
                        {titulo}
                    </Typography>
                    <Typography color='#004F67' align='center'>
                        {descripcion}
                    </Typography>
                    <Stack alignItems="center" mt='20px'>
                        <ColorButton><a className="btnin" href={donde}>{btname}</a></ColorButton>
                    </Stack>
                </CardContent>
            </Card>
        </div>
    );
}



export default function Section1(){
    
    return (
        <Grid container alignItems='center' justify='center' className='seccion-cards' pt='1.5%'>
            
                <Grid sx={12} sm={6} md={6}>
                    <Stack alignItems='flex-end' margin='3%'>
                    {card_cont(pets, 'Mascotas', ' En este sitio web encontraras una lista de negocios cercanos a tu ubicación, y los mejores productos y servicios para tus mascotas.', '#uno', 'CÓMO FUNCIONA')}
                    </Stack>
                </Grid>
                <Grid sx={12} sm={6}  md={6} >
                    <Stack alignItems='flex-start' margin='3%'>
                    {card_cont(empresas, 'Empresas', 'Somos un directorio especializado en productos y servicios para mascotas. Publíca tu negocio y capta nuevos clientes en tu localidad.', '#dos', 'AMPLIAR INFORMACIÓN')}
                    </Stack>
                </Grid>
                <Grid id='uno' sx={12} sm={12} md={12}>
                <Typography color='#004F67' className='figma-headers' variant="h4" align="center" paddingTop="70px" component="div" mb='0px' >
                    Para Líderes de Manada
                </Typography>
                <Typography color='#004F67' variant="h5" align="center" mt='-20px'>
                    ________________________
                </Typography>
                <Typography color='#004F67' variant="h5" align="center" component="div" mb='40px'>
                    ¿Cómo funciona?
                </Typography>
                </Grid>

        </Grid>
    )

}