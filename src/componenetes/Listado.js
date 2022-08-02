import { useEffect, useState } from 'react';
import { useNavigate, Navigate, Link,   } from 'react-router-dom';
import React   from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react'
//usenavigate por usehistory 

    function Listado (){
    let token = sessionStorage.getItem('token')



        const [movieList, setMovieList] = useState([]);

       useEffect(()=> {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=a4fac00f4fcae5a4317c0505b5cb7417&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
       axios.get(endPoint)
       .then(response => {
        const apiData = response.data;
        setMovieList(apiData.results);
       })
       .catch(error => {
        swAlert( <h2>Hubo errores, intenta mas tarde!</h2> )
       })
    }, [setMovieList]) 
   //Se ocupa Navigate por Redirect
return(
    <>
    {!token && <Navigate to ="/"/> }
    <div className="row">
{/*estructura base del listado de peliculas!*/}
    {
        movieList.map((OneMovie, indice) => {

        return(
            <div className='col-3' key={indice}> 
            <div className="card">
            <img src={`https://image.tmdb.org/t/p/w500/${OneMovie.poster_path}`} className="card-img-top" alt="..."/>
            <div className="card-body">
             <h5 className="card-title">{OneMovie.title}</h5>
            <p className="card-text">{OneMovie.overview.substring(0, 100)}...</p>
            <Link to={`/detalle?peliculaID=${OneMovie.id}`} className="btn btn-primary">Ver detalles</Link>
            </div>
            </div>
             </div>  
        )    
        })
    }

    
    
    </div>
    </>

)


   
} 


export default Listado