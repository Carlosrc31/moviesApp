import './Search.css'
import {useState, useEffect} from "react";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import { useQuery } from "../PersonalHooks/useQuery";
function Search(){//Buscador de peliculas
    const [searchText, setSearchText] = useState(""); //Estado que guardara la entrada del input del buscador
        let navigate = useNavigate();

    const query = useQuery();
    const search = query.get("search");
    
    //Efecto que se va a mandar a llamar cada vez que se cambie el parametro de lo que esta en el buscador
    useEffect(() => {
        setSearchText(search || "")//El texto del buscador se cambiara a lo que esta en la ruta de la pagina          
        }, [search]);
    //Función que se mandara a llamar al dar un enter al buscador o dar click en la lupa.
    const handleSubmit = (event) =>{
        event.preventDefault();//Evitar un POST
        navigate("/?search=" + searchText) //Irse a la ruta de las peliculas que coincidan con lo que escribio el usuario en el search
    }

    //Función que se mandara a llamar cada vez que el usuario escriba en el input del buscador
    const handleChange =(event) =>{
        //En la variable text se guardara lo que escriba el usuario
        const text = event.target.value;
        //El valor de la variable text se guardara en el siguiente estado.
        setSearchText(text);
    }
    return(
        <form className="searchContainer" onSubmit={handleSubmit}>
            <div className="searchBox">
                <input id="searchInput"type="text" value={searchText} onChange={handleChange}></input>
                <button id="Sbutton" type="submit"><FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}
export default Search;