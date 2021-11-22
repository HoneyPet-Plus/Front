import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ButtonAppBar from './Components/Menu/Nav'
import Proveedores from './Components/ListaProveedores/Proveedores'
import Home from './Components/Home/Home'
import Mapa from './Components/Mapa/Mapa'

function App(){

  return(
    <Router >
      <ButtonAppBar/>
    {/* <Routes>
      <Route path="/Provs" element={<Proveeee/>}/>
    </Routes> */}
      <Route path='/Proveedores'  component={Proveedores}/>
      <Route exact path='/Inicio'   component={Home}/>
      <Route path='/Mapa'  component={Mapa}/>

    </Router>);
}

export default App;