import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Proveedores from './Components/ListaProveedores/Proveedores';
import ButtonAppBar from './Components/Menu/Nav';


function App() {
  return (
    <Router>
    <ButtonAppBar/>
    <Route path='/Proveedores' exact component={Proveedores} />
    </Router>
  );
}

export default App;
