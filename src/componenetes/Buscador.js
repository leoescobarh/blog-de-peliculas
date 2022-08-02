import swAlert from '@sweetalert/with-react'
import { useNavigate  } from 'react-router-dom';
function Buscador (){


    const navigate = useNavigate();
    //se crea varaaible con funcion prevent default para que no refresque la pag,  luego se crea 
    //const keyword para guardar el valor escrito en el input de "buscal"
    //al form se le pasa la funcion buscarle dentro con onsubmit al apretar buscar
    
    const buscarle = e => {

        e.preventDefault();
        
        const buscal  = e.currentTarget.buscal.value.trim();
        

        if(buscal.length < 3){

            swAlert(<h5> Tienes que escribir algo... </h5>)
        } else {
            e.currentTarget.buscal.value ='';
            navigate(`/resultado?palabra=${buscal}`)
        }

    }
return(
            
    <form  className="d-flex align-items-center" onSubmit={buscarle}>
        <label>
     <input className="form-control" type="text" name ="buscal" placeholder="Busca tu peli favorita!"/>
     </label>            
        <button type="submit" className="btn btn-success"  >Buscar </button>      
    </form>
    
)

  
}

export default Buscador


