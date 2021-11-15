import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import "./Nav.css"
import { Link } from 'react-router-dom';
import logoheader from '../../assets/Home/logoheader.svg'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position='fixed'>
        <Toolbar className="pNav">
          <Typography mt variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logoheader} alt="HoneyPet +" />
          </Typography >
          
          <Button color="inherit" className="btnNav"><Link to='/Inicio' className="btnin">Inicio</Link></Button>
          |
          <Button color="inherit" className="btnNav"><Link to='/' className="btnin">Mapa</Link></Button>
          |
          <Button color="inherit" className="btnNav"><Link to='/Proveedores' className="btnin">Proveedores</Link></Button>
          |
          <Button color="inherit" className="btnNav"><Link to='/' className="btnin">Ingresar</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}