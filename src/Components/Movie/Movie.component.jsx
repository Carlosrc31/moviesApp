import { NavLink } from "react-router-dom";
import "./Movie.css"
import imgdefault from "./INF.png";

function Movie(props){
    //Se agrego un if ternario para saber cuando agregar una imagen por default si no se encontro el poster dada por la api
    let poster = props.movie.poster_path ? "https://image.tmdb.org/t/p/w300" + props.movie.poster_path : imgdefault; 
    return (
        // Se genera cada pelicula con su poster y su título
        <li className="item">
            <NavLink to={"/movies/" + props.movie.id}>
                <img className="item_img" src={poster} alt={props.movie.title}/>
                <div>
                    {props.movie.title}
                </div>
            </NavLink>
        </li>
    );
}
 
export default Movie;