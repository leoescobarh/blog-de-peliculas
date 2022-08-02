import axios from "axios";
import React from "react";
import swAlert from '@sweetalert/with-react'
import { Navigate, useNavigate   } from 'react-router-dom';


function Login(){

   //usenavigate por usehistory 
 const history = useNavigate ();   
 
 const submitHandler = e => {
   e.preventDefault();

   // acceder el valor 
   const email = e.target.email.value;
   const password = e.target.password.value;
   //expresiones regulares
   const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
   
   if(email === '' || password === '') {

    swAlert(
        <h2>Los campos no pueden estar vacios</h2>
    )
       return;
   }
   //validacion de email
   if (email !== '' && !regexEmail.test(email)){

    swAlert(
        <h2>Debes escribir una direccion de correo valida</h2>
    )  

        return;
   }

   //validar valores que sean disttintas de 
    if( email !== 'challenge@alkemy.org'|| password !== 'react'){
        swAlert(
            <h2>Credenciales invalidas</h2>
        )
        return;
        
    }

    
    //peticiones del tipo post para enviar informacion
    //la url del endpoint de la api '', y por otro lado en formato de objeto el formato que se espera{}.
    axios
            .post('http://challenge-react.alkemy.org', {email, password})
            //cuando la promesa se resuelve entonces (then) se le pasa un callback
            //y se le pasa un console log de la respuesta de la api, donde la respuesta de la api
            //donde puntualmente la informacion necesaria esta data donde obtiene el token.
            .then(res =>{
                swAlert(
                    <h2>Perfecto, ¡ya ingresaste!</h2>
                )

                const tokenRecibido = res.data.token;
                // accedimos a local storage y su metodo set item
                //que guarda 2 argumentos 1 el nombre de la propiedad que quieres guardar la infor
                //el 2 la informacion que quieres guardar en el argumento
                //Solo se almacena String en local storage, hay que parsear para pasar un array,etc.
                sessionStorage.setItem('token', tokenRecibido);
                history('/Listado');       
            })
 }
        let token = sessionStorage.getItem('token');
    return (
        
       < > 
        {token && <Navigate to ="/listado"/>}   
        <div className ="container mb-3">  
        <h2 className="text-center" >Formulario de Ingreso</h2 >       
        <form  onSubmit={submitHandler}>
         <span className="form-label" >Correo Electronico:</span> <br /> 
            <input type="text" name = "email" className="form-control"/>
            <br /> 
            <span >Contraseña:</span> <br /> 
            <input type="password" name = "password" className="form-control" />
            <br />            
            <button  type="submit" className="btn btn-primary"  >Ingresar </button>      
        </form>
        </div>
        
        </ > 
    )
}

export default Login;

