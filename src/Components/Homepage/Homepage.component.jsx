import React from "react";
import movies from "/Users/carlosrosas/Documents/GitHub/DWA/movies-app/src/movies.json"
import "./Homepage.css";
import Movie from "/Users/carlosrosas/Documents/GitHub/DWA/movies-app/src/Components/Movie/Movie.component.jsx"

function Homepage(){
    return (
        // Se genera el tablero con las películas 
        <ul className="homepage_board">
            {movies.map((movie)=>{
                return <Movie key={movie.id} movie={movie}/>
            })}
        </ul>
    );
}

export default Homepage;