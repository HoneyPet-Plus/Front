import * as React from 'react';
import './Home.css';
// import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import pets from '../../assets/Home/pets.svg';
import empresas from '../../assets/Home/empresas.svg';
import Grid from '@mui/material/Grid';


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
        <Grid container alignItems='center' justify='center' className='seccion-cards' pt='1.5%'>
            
                <Grid sx={12} sm={6} md={6}>
                    <Stack alignItems='flex-end' margin='3%'>
                    {card_cont(pets, 'Mascotas', ' En este sitio web encontraras una lista de negocios cercanos a tu ubicación, y los mejores productos y servicios para tus mascotas.')}
                    </Stack>
                </Grid>
                <Grid sx={12} sm={6}  md={6} >
                    <Stack alignItems='flex-start' margin='3%'>
                    {card_cont(empresas, 'Empresas', 'Somos un directorio especializado en productos y servicios para mascotas. Publíca tu negocio y capta nuevos clientes en tu localidad.')}
                    </Stack>
                </Grid>

                <Grid sx={12} sm={12} md={12}>
                <Typography variant="h4" align="center" paddingTop="50px" component="div" mb='0px'>
                    Para Líderes de Manada
                </Typography>
                <Typography variant="h5" align="center" mt='-20px'>
                    ________________________
                </Typography>
                <Typography variant="h6" align="center" component="div" mb='20px'>
                    ¿Cómo funciona?
                </Typography>
                </Grid>

        </Grid>
    )

}