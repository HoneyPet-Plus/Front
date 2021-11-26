import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import SignIn from './Components/CuentaUsuario/Ingresar'
import SignUp from './Components/CuentaUsuario/Registrar'
import Pruebas from './Components/Home/Pruebas'

ReactDOM.render(
  <React.StrictMode>
  {/* <SignUp/> */}
  {/* <SignIn/> */}
  {/* <App/> */}
  <Pruebas/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//<App />
reportWebVitals();
