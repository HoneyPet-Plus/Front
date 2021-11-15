import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ButtonAppBar from './Components/Menu/Nav'
import Proveedores from './Components/ListaProveedores/Proveedores'
import Home from './Components/Home/Home'

function App(){

  return(
    <Router>
      <ButtonAppBar/>
    {/* <Routes>
      <Route path="/Provs" element={<Proveeee/>}/>
    </Routes> */}
      <Route path='/Proveedores' exact component={Proveedores}/>
      <Route path='/Inicio' exact component={Home}/>
s
    </Router>);
}

export default App;