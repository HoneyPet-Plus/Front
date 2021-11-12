import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./Nav.css"

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar className="pNav">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HoneyPet+
          </Typography>
          <Button className="btnNav" color="inherit"><a className="btnin" href="">Inicio</a></Button>
          |
          <Button className="btnNav" color="inherit"><a className="btnin" href="">Mapa</a></Button>
          |
          <Button className="btnNav" color="inherit"><a className="btnin" href="../ListaProveedores/Proveedores.js">Proveedores</a></Button>
          |
          <Button className="btnNav" color="inherit"><a className="btnin" href="">Ingresar</a></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}