import React, { useEffect, useState} from "react";
import {useParams} from "react-router"
import {getApi} from "../httpApi"
import MovieIn from "./MovieIn.json"
import "./MovieInfo.css"

function MovieInfo(){
    const {movieId}= useParams();//cada pelicula tiene un id el cual podemos leer con useParams, con este podemos leer la parte de la url que tenga el mismo identificador en este caso movieId

    const [MovieInfo, setMovieInfoMovieInfo]=useState(null);// variable donde se guardara el id de la pelicula
    
    useEffect(()=>{
        getApi("/movie/"+movieId).then(data=>{
            setMovieInfoMovieInfo(data);
        })
    }, [movieId]);
    if (!MovieInfo){
        return null;
    }

    // Obtenemos la imagen de la pelicula obtenemos de la API
    let poster = "https://image.tmdb.org/t/p/w500" + MovieInfo.poster_path;
    return (
        // Se hace la ruta dinámica con los datos de la API
        <div className="infoContainer">
            <img className="img size" src={poster} />
            <div className="details size">
                <p className="item_one"> <strong> Title: </strong> {MovieInfo.title}</p>
                <p> <strong> Genres: </strong> {MovieInfo.genres.map( genre =>{
                    return genre.name;
                }).join(", ")}</p>
                <p> <strong> Description: </strong> {MovieInfo.overview}</p>
            </div>
        </div>
    );
}

export default MovieInfo; 