import {useEffect, useState} from "react";
import { useQuery } from "../PersonalHooks/useQuery";
import "./Homepage.css";
import {getApi} from "../httpApi"
import {Movie } from "../index"
import LoadPage from "../Loading/LoadPage.jsx";
import Search from "../Browser/Search.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "../Message/Empty";

function Homepage(){

     const [Loading, setLoading] = useState(true);//Estado para saber si esta cargando la pagina

    //DDAU para poder formatear las búsquedas de peliculas, la página y si es que hay más movies
    const [moviesList, setMoviesList] = useState([]);// arreglo para guardar la info traida por la api
    const [page, setPage] = useState(1); //Sirve para la paginación de las movies
    const [moreMovies, setMoreMovies] = useState(true); //Saber si hay más peliculas en la página
    const [error, setError] = useState(false); //para prevenir un error con la DB

    const query = useQuery();

    //variable para guardar el texto de lo que el parametro search tiene almacenado
    const search = query.get("search");

    useEffect(()=> {
         setLoading(true);
        //La variable va a guardar el texto que este almacenado en el input del buscador
        //Se agrego un if ternario para saber si se esta buscando una pelicula o entrando a la pagina principal
        const searchUrl = search ? "/search/movie?query=" + search + "&page=" + page: "/discover/movie?page=" + page; 
        //getApi es la funcion impordada donde se implementa la api 
        getApi(searchUrl).then((data) => {
        setMoviesList(prevMovies => prevMovies.concat(data.results)); // se guarda la info en el arreglo y se mantiene la anterior
        setMoreMovies( data.page < data.total_pages ? true : false)
        setLoading(false);
        }).catch((error) => { setError(true);});

    }, [search, page]);//Efecto que se va a cargar al entrar a la pagina y cada vez que la variable search tenga nuevos valores.

    //Si no esta cargando y no encontro la pelicula o hay un error, se mostrara un mensaje de que no hay resultados de la peli buscada
    if((!Loading && moviesList.length === 0) || error ){ 
        return <Empty/>;
    }

    return (
        <div>
            {/* Para el buscador/filtro */}
            <Search setMoviesList={setMoviesList} setPage={setPage} setMoreMovies={setMoreMovies}/>
            {/* Se genera el tablero con las películas*/} 
            <InfiniteScroll
            dataLength={moviesList.length}
            hasMore={moreMovies}
            next={() => setPage( prevpage => prevpage + 1 )}
            loader={<LoadPage/>} 
            >
                <ul className="homepage_board">
                    {moviesList.map((movie)=>{
                        return <Movie key={movie.id} movie={movie}/>
                    })}
                </ul>
            </InfiniteScroll>
        </div>
    );
}

export default Homepage;