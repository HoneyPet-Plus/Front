import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import "./Nav.css"
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar className="pNav">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HoneyPet +
          </Typography>
          <Button color="inherit" className="btnNav"><Link to='/' className="btnin">Inicio</Link></Button>
          |
          <Button color="inherit" className="btnNav"><Link to='/' className="btnin">Mapa</Link></Button>
          |
          <Button color="inherit" className="btnNav"><Link to='/Provs' className="btnin">Proveedores</Link></Button>
          |
          <Button color="inherit" className="btnNav"><Link to='/' className="btnin">Ingresar</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}