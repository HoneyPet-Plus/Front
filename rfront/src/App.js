import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ButtonAppBar from './Components/Menu/Nav'
import Proveedores from './Components/ListaProveedores/Proveedores'
import Home from './Components/Home/Home'
import Mapa from './Components/Mapa/Mapa'
import VistaPerfil from './Components/PerfilUsuario/pruebasmui'
import Footer from './Components/Menu/Footer'


function App(){

  return(
    <Router>
      <ButtonAppBar/>
    {/* <Routes>
      <Route path="/Provs" element={<Proveeee/>}/>
    </Routes> */}
      <Route path='/Proveedores' exact component={Proveedores}/>
      <Route path='/Inicio' exact component={Home}/>
      <Route path='/Mapa' exact component={Mapa}/>
      <Route path='/Perfil' exact component={VistaPerfil}/>
      <Footer/>

    </Router>);
}

export default App;