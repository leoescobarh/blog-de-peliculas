


function Resultado (){

    let query = new URLSearchParams(window.location.search);

    let buscarle = query.get('buscarle')

    return(
    <>
    
        <h5> Resultado</h5>
        <p>Vas a buscar: {buscarle} </p>    
    </>
    )
}



export default Resultado
