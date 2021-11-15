import React from "react";
import '../../Components/Mapa/Map.css'

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import {Marker, Popup} from 'react-leaflet'
import {IconShop} from "./IconShop";



const MarkersShop = (props) =>{

    const {lugares} = props
    
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const añadirFav=(place,i)=>{
        console.log(i)
      }
    
      const list = (anchor,place,i) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <div className='box-imagen'>Imagen</div>
          <div className='box-nombreshop'>
            <h1>{place.popup.nombre}</h1>
          </div>
          <div className='box-nombreshop'> 
            <h2><FmdGoodIcon/>Cr 3</h2>
          </div>
          <div className='box-descripcion'>
            <h3>{place.popup.descripción}</h3>
          </div>
          <div className='box-btn'>
            <button className='btn-style'>Visitar Pagina</button>
          </div>
          <div className='box-btn'>
            <button onClick={añadirFav(place,i)} className='btn-style'>Añadir a Favoritos</button>
          </div>
        </Box>
      );

    const anchor = 'right'

    const markers = lugares.map((place,i) =>(
        <Marker position={place.popup.geometry} icon={IconShop} key={i}>
            <Popup>
                
                <h1 className='text'>{place.popup.nombre},{i}</h1>
                <Divider/>
                <h3 className='text'>{place.popup.descripción}</h3>
                <Divider sx={{m: 2}}/>
                <div  className='text'>
                    <React.Fragment key={anchor}>
                    <Button variant="contained" onClick={toggleDrawer(anchor, true)}>Mas Informacion</Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                          
                          {list(anchor, place,i)}
                        </Drawer>
                    </React.Fragment>
                </div>
                
            </Popup>
        </Marker>
    ))

    return markers;
}

export default MarkersShop