import { NavLink } from "react-router-dom";
import "/Users/carlosrosas/Documents/GitHub/DWA/movies-app/src/Components/Movie/Movie.css"

function Movie(props){
    let poster = "https://image.tmdb.org/t/p/w300" + props.movie.poster_path;
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