import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
import PublicarNegocio from './Components/PublicarNegocio/PublicarNegocio';
/*
import Proveedores from './Components/ListaProveedores/Proveedores';
import Home from './Components/Home/Home';
*/
// import Nav from './Components/Menu/Nav';
// import ButtonAppBar from './Components/Menu/Nav';
// import Proveedores from './Components/ListaProveedores/Proveedores';


ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<App />
reportWebVitals();
