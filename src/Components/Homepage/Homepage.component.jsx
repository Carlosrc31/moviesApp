import {useEffect, useState} from "react";
import { useQuery } from "../PersonalHooks/useQuery";
import "./Homepage.css";
import {getApi} from "../httpApi"
import Movie from "../Movie/Movie.component.jsx"
import LoadPage from "../Loading/LoadPage.jsx";
import Search from "../Browser/Search.jsx";

function Homepage(){

    const [moviesList, setMovieList] = useState([]);// arreglo para guardar la info traida por la api
    const [Loading,setLoading] = useState(true);

    const query = useQuery();
    //variable para guardar el texto de lo que el parametro search tiene almacenado
    const search = query.get("search");
    console.log(search);

    useEffect(()=> {
        setLoading(true);
        //La variable va a guardar el texto que este almacenado en el input del buscador
        //Se agrego un if ternario para saber si se esta buscando una pelicula o entrando a la pagina principal
        const searchUrl = search ? "/search/movie?query=" + search : "/discover/movie"; 
        //getApi es la funcion impordada donde se implementa la api 
        getApi(searchUrl).then((data) => {
          setMovieList(data.results); // se guarda la info en el arreglo
          setLoading(false);
        });
    }, [search]);//Efecto que se va a cargar al entrar a la pagina y cada vez que la variable search tenga nuevos valores.

    //ventana de Loading
    if(Loading){
        return <LoadPage />;
    }

    return (
        <div>
        <Search />
        {/* Se genera el tablero con las películas*/} 
        <ul className="homepage_board">
            {moviesList.map((movie)=>{
                return <Movie key={movie.id} movie={movie}/>
            })}
        </ul>
        </div>
    );
}

export default Homepage;