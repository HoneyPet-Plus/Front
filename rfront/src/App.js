import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ButtonAppBar from './Components/Menu/Nav'
import Proveedores from './Components/ListaProveedores/Proveedores'
import Home from './Components/Home/Home'
import Mapa from './Components/Mapa/Mapa'
import VistaPerfil from './Components/PerfilUsuario/vistaperfil'
import Footer from './Components/Menu/Footer'
import { Redirect } from 'react-router';
import NavBar from './Components/Menu/NavBar'
import Registrar from './Components/CuentaUsuario/Registrar'
import Ingresar from './Components/CuentaUsuario/Ingresar'
import PagProveedor from './Components/PaginaProveedor/PagProveedor'
import PublicarNegocio from './Components/PublicarNegocio/PublicarNegocio'
import ViewMapInput from './Components/Mapa/ViewMapInput'
import DemoPagProveedor from './Components/PaginaProveedor/DemoPagProveedor'


function App(){

  return(
    <Router >
      <ButtonAppBar/>
      {/* <NavBar/> */}
    {/* <Routes>
      <Route path="/Provs" element={<Proveeee/>}/>
    </Routes> */}
      
      <Route path='/' exact component={Home}/>
      <Route path='/Proveedores' exact component={Proveedores}/>
      <Route path='/Inicio' exact component={Home}/>
      <Route path='/Mapa' exact component={Mapa}/>
      <Route path='/Perfil' exact component={VistaPerfil}/>
      <Route path='/Registrar' exact component={Registrar}/>
      <Route path='/Ingresar' exact component={Ingresar}/>
      <Route path='/Pagina' exact component={PagProveedor}/>
      <Route path='/Publicar' exact component={PublicarNegocio}/>
      <Route path='/DemoPagProveedor' exact component={DemoPagProveedor}/>
      
      <Footer/>

    </Router>);
}

export default App;