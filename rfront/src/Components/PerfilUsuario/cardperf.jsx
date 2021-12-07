import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './vistaperfil.css';
import SimpleBottomNavigation from './botonescard';


export default function ImgMediaCard({prov}) {
  return (
    <Card className="conttt" sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="183"
        image={prov.imagen_destacada}
      />
      <CardContent className="descripcion">
        <Typography gutterBottom variant="h5" component="div">
          <h3>{prov.nombre_empresa}</h3>
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          <p className='txtdes'>{prov.descripcion_corta}</p>
        </Typography>
      </CardContent>
      <CardActions className="descripcion">
        <SimpleBottomNavigation prov={prov}/>
      </CardActions>
    </Card>
  );
}