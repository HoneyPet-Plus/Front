import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ButtonAppBar from './Components/Menu/Nav'
import Proveeee from './Components/ListaProveedores/Proveedores';

function App(){

  return(
    <Router>
      <ButtonAppBar/>
    <Routes>
      <Route path="/Provs" element={<Proveeee/>}/>
    </Routes>
    </Router>);
}

export default App;