import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ButtonAppBar from './Components/Menu/Nav'
import Proveedores from './Components/ListaProveedores/Proveedores'
import Home from './Components/Home/Home'
import Mapa from './Components/Mapa/Mapa'
import VistaPerfil from './Components/PerfilUsuario/pruebasmui'
import Footer from './Components/Menu/Footer'
import { Redirect } from 'react-router';
import NavBar from './Components/Menu/NavBar'


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
      <Footer/>

    </Router>);
}

export default App;