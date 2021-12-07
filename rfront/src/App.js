import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ButtonAppBar from './Components/Menu/Nav'
import Proveedores from './Components/ListaProveedores/Proveedores'
import Home from './Components/Home/Home'
import Mapa from './Components/Mapa/Mapa'
import VistaPerfil from './Components/PerfilUsuario/vistaperfil'
import Footer from './Components/Menu/Footer'
import Registrar from './Components/CuentaUsuario/Registrar'
import Ingresar from './Components/CuentaUsuario/Ingresar'
import PagProveedor from './Components/PaginaProveedor/PagProveedor'
import PublicarNegocio from './Components/PublicarNegocio/PublicarNegocio'
import DemoPagProveedor from './Components/PaginaProveedor/DemoPagProveedor'


function App(){

  return(
    <BrowserRouter >
      <ButtonAppBar/>
      {/* <NavBar/> */}
    {/* <Routes>
      <Route path="/Provs" element={<Proveeee/>}/>
    </Routes> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/proveedores' element={<Proveedores />}/>
        <Route path='/inicio' element={<Home />}/>
        <Route path='/mapa' element={<Mapa />}/>
        <Route path='/perfil' element={<VistaPerfil />}/>
        <Route path='/registrar' element={<Registrar />}/>
        <Route path='/ingresar' element={<Ingresar />}/>
        <Route path='/publicar' element={<PublicarNegocio />}/>
        <Route path='/negocio/:negocioId' element={<PagProveedor />}/>
        <Route path='/mi_pagina/:negocioId' element={<PagProveedor />}/>
        <Route path='/demo_pagina' element={<DemoPagProveedor />}/>
      </Routes> 

      <Footer/>

    </BrowserRouter>);
}

export default App;