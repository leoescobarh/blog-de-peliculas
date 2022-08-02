import Login from "./componenetes/Login";
import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Listado from "./componenetes/Listado";
import Detalle from "./componenetes/Detalle";
import Header from "./componenetes/Header";
import Footer from "./componenetes/Footer";
import Resultado from "./componenetes/Resultado";
// Routes por Switch en el import
//css
//import './css/app.css';
import './css/bootstrap.min.css';


function App() {
  return (
   //ocupamos exact cuando la ruta en este caso la raiz es muy amplia para especificar que buscamos Login
        <>

        
        <Header/>
        <div className="container mt-3">
        <Routes >
          <Route exact path="/" element ={<Login/>} />   
          <Route path="/listado" element ={<Listado/>} />
          <Route path="/detalle" element ={<Detalle/>} />
          <Route path="/resultado" element ={<Resultado/>} />
            </Routes>
            </div>

            <Footer/>
      </>
     
  )
}


export default App;
