
import { useEffect, useState } from 'react';
import axios from 'axios';
import swAlert from '@sweetalert/with-react'
//`https://api.themoviedb.org/3/search/movie?api_key=a4fac00f4fcae5a4317c0505b5cb7417&language=es-ES&page=1&include_adult=false&query=${keyword}`


function Resultado() {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword')

    const [resultadoPelicula, setResultadoPelicula] = useState = ([]);
    useEffect(() => {

        const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=a4fac00f4fcae5a4317c0505b5cb7417&language=es-ES&page=1&include_adult=false&query=${keyword}`
        axios.get(endPoint)
            .then(response => {
                const resultadoArray = response.data.results;

                if (resultadoArray.length === 0){
                    swAlert(<h4>No hubo resultados</h4>)
                }
                setResultadoPelicula(resultadoArray);
            })
            .catch(error => console.log(error))

    }, [keyword]);

    return (
        <>
            <h2>Buscaste: <em>{keyword}</em></h2>
            <div className="row">
                {/*estructura base del listado de peliculas!*/}
                {
                    resultadoPelicula?.map((OneMovie, indice) => {

                        return (
                            <div className='col-3' key={indice}>
                                <div className="card">
                                    <img src={`https://image.tmdb.org/t/p/w500/${OneMovie.poster_path}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{OneMovie.title}</h5>
                                        {   /*  <p className="card-text">{OneMovie.overview.substring(0, 100)}...</p>}
          { /* <Link to={`/detalle?peliculaID=${OneMovie.id}`} className="btn btn-primary">Ver detalles</Link> */}
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



export default Resultado
