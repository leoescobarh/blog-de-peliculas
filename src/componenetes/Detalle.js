import { Navigate   } from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Detalle (){

let token =sessionStorage.getItem('token');   
// se crea la variable query para rescatar a que elemento sacar el detalle
let query = new URLSearchParams(window.location.search);

let peliculaID = query.get('peliculaID')
const [movie, setMovie] = useState(null);



    useEffect (()=>{
        const endPoint = ` https://api.themoviedb.org/3/movie/${peliculaID}?api_key=a4fac00f4fcae5a4317c0505b5cb7417&language=es-ES`
       axios.get (endPoint)
       .then(response => {
        const movieData = response.data;

        setMovie(movieData)
       })
       .catch(error => {
        console.log(" Hubo errores, intenta mas tarde" )
       })
    }, [peliculaID]);
    
    return(
        <>
        {/*!token && <Navigate to ="/"/>*/ }
       { /*Se realiza renderizado condicional */}
       {!movie && <p>Cargandoleee...</p>}
        {movie && 
        <>
                <h5>Titulo: {movie.title}</h5>
                <div className='row'>
                    <div className='col-4'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid" alt="movie poster"/>
                    </div>
                    <div className='col-8'>
                    
                    <h5>Fecha de estreno:{movie.release_date}</h5>
                    <h5>Reseña:</h5>
                    <p>{movie.overview}
                    </p>
                    <h3>Rating:{movie.vote_average} </h3>
                    <h3>Generos:</h3>
                    

                        <ul>
                        {movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>)}        
                        </ul>
                    </div>
                </div>    
             </>     
          } 
        </>
        )
        }


export default Detalle;