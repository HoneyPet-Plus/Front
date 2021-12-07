import Grid from '@mui/material/Grid';
import './vistaperfil.css';
import Userbar from './userbar';
import CardsPerfil from './cardsPerfil';



export default function VistaPerfil (){

    

    return(
        <div className="pag-container">
            
            <header>
                
            <Userbar/>
            <h2 className="texx">Mis proveedores favoritos</h2>
            </header>
           
            <Grid container>
                  <CardsPerfil></CardsPerfil>
            </Grid>
                        
        </div>
        
    )
}