import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "tw-elements";
import "./index.css";
import './alert.css';
import App from "./app/App"
import  SignUp  from "./views/SignUp/signUp";
import { Login } from './views/login/Login';
import DataPersonal from "./views/Perfil/DataPersonal";
import DatosPersonal from './views/Perfil/pages/DatosPersonal';
import PerfilEducacion from './views/Perfil/pages/PerfilEducacion';
import PerfilLaboral from './views/Perfil/pages/PerfilLaboral';
import TrabajoDeseado from './views/Perfil/pages/TrabajoDeseado';
import Experiencia from './views/Perfil/pages/Experiencia';
import Acerca from './views/Perfil/pages/Acerca';
import {LoggedUserProvider} from './contexts/auth/LoggedUser'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoggedUserProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      {/* <App /> */}
      <Route path='/register' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/perfil' element={<DataPersonal />} />
      <Route path='/datospersonales' element={<DatosPersonal />} />
      <Route path='/perfileducacional' element={<PerfilEducacion />} />
      <Route path='/perfilLaboral' element={<PerfilLaboral />} />
      <Route path='/experiencia' element={<Experiencia/>} />
      <Route path='/trabajodeseado' element={<TrabajoDeseado/>} />
      <Route path='/Acercadeti' element={<Acerca/>} />
    </Routes>
    </BrowserRouter>
    </LoggedUserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
