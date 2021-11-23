import React, { useEffect, useState} from "react";
import {useParams} from "react-router"
import {getApi} from "../httpApi"
import LoadPage from "../Loading/LoadPage.jsx"
import "./MovieInfo.css"
import imgdefault  from "../Movie/INF.png"

function MovieInfo(){
    const {movieId}= useParams();//cada pelicula tiene un id el cual podemos leer con useParams, con este podemos leer la parte de la url que tenga el mismo identificador en este caso movieId
    const [Loading,setLoading] = useState(true) //Estado que determinara si la pagina esta cargando
    const [MovieInfo, setMovieInfoMovieInfo]=useState(null);// variable donde se guardara el id de la pelicula
    
    useEffect(()=>{
        setLoading(true)//La pagina estará cargando en espera de la petición de la api 
        getApi("/movie/"+movieId).then(data=>{
            setMovieInfoMovieInfo(data);
            setLoading(false);
        })
    }, [movieId]);

    //Ventana de Loading
    if (Loading) {
        return <LoadPage/>;
    }
    

    if (!MovieInfo){
        return null;
    }

    // Obtenemos la imagen de la pelicula obtenemos de la API
    let poster = MovieInfo.poster_path ? "https://image.tmdb.org/t/p/w500" + MovieInfo.poster_path : imgdefault; //Si no existe un poster se regresara una imagen default.
    return (
        // Se hace la ruta dinámica con los datos de la API
        <div className="infoContainer">
            <img className="img size" alt="Imagen del poster de la película" src={poster} />
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