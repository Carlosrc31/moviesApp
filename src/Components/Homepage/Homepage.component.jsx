import {useEffect, useState} from "react";
import "./Homepage.css";
import {getApi} from "../httpApi"
import Movie from "../Movie/Movie.component.jsx"

function Homepage(){
    
    const [moviesList, setMovieList] = useState([]);// arreglo para guardar la info traida por la api
    useEffect(()=> {
        //getApi es la funcion impordada donde se implementa la api 
        getApi("/discover/movie").then((data) => {
          setMovieList(data.results); // se guarda la info en el arreglo
        });
    }, []);

    return (
        // Se genera el tablero con las películas 
        <ul className="homepage_board">
            {moviesList.map((movie)=>{
                return <Movie key={movie.id} movie={movie}/>
            })}
        </ul>
    );
}

export default Homepage;