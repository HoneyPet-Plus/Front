import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; 
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';


function Userbar({email}) {
    return (
        <div className="bar-container">
            <Box className='cont' sx={{ flexGrow: 1 }}>
              <AppBar position="static" color="action">
                <Toolbar>
                  <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                  >
                    <AccountCircleIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>{email}</Typography>

                  <IconButton
                    size="large"
                    aria-label="menu"
                    sx={{ color: "FireBrick" }}
                  >
                    <Tooltip title="Borrar Página" arrow>
                      <DeleteForeverIcon />
                    </Tooltip>
                  </IconButton>

                  <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <Tooltip title="Cerrar Sesión" arrow>
                      <LogoutIcon />
                    </Tooltip>
                  </IconButton>

                  <IconButton
                    size="large"
                    color="inherit"
                    aria-label="menu"
                  >
                    <Tooltip title="Editar Datos" arrow>
                      <EditIcon />
                    </Tooltip>
                  </IconButton>
                </Toolbar>
              </AppBar>
            </Box>
        </div>
    );
}

export default Userbar;
