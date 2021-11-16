import React from "react";
import MovieIn from "./MovieIn.json"
import "/Users/carlosrosas/Documents/GitHub/DWA/movies-app/src/Components/MovieInfo/MovieInfo.css"

function MovieInfo(){
    // Obtenemos la imagen de la pelicula que viene en el json
    let poster = "https://image.tmdb.org/t/p/w500" + MovieIn.poster_path;
    return (
        // Se hace la ruta dinámica con los datos del json
        <div className="infoContainer">
            <img className="img size" src={poster} />
            <div className="details size">
                <p className="item_one"> <strong> Title: </strong> {MovieIn.title}</p>
                <p> <strong> Genres: </strong> {MovieIn.genres.map( genre =>{
                    return genre.name;
                }).join(", ")}</p>
                <p> <strong> Description: </strong> {MovieIn.overview}</p>
            </div>
        </div>
    );
}

export default MovieInfo; 