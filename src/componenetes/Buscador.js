import swAlert from '@sweetalert/with-react'
import { useNavigate  } from 'react-router-dom';
function Buscador (){


    const navigate = useNavigate();
    //se crea varaaible con funcion prevent default para que no refresque la pag,  luego se crea 
    //const keyword para guardar el valor escrito en el input de "buscal"
    //al form se le pasa la funcion buscarle dentro con onsubmit al apretar buscar
    
    const keyword = e => {

        e.preventDefault();
        
        const keyword  = e.currentTarget.keyword.value.trim();
        

        if(keyword.length < 3){

            swAlert(<h5> Tienes que escribir algo... </h5>)
        } else {
            e.currentTarget.keyword.value ='';
            navigate(`/resultado?keyword=${keyword}`)
        }

    }
return(
            
    <form  className="d-flex align-items-center" onSubmit={keyword}>
        <label>
     <input className="form-control" type="text" name ="keyword" placeholder="Busca tu peli favorita!"/>
     </label>            
        <button type="submit" className="btn btn-success"  >Buscar </button>      
    </form>
    
)

  
}

export default Buscador


