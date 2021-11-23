import monster from "./monster.jpg"
import './Error404.css'
function Error404(){
    return(
        <div className="errorContainer"> 
            <img id="img" src={monster} alt="Error 404"/>
            <h1>Page not found, Please click on MovieExpert </h1>
        </div>
    )
}
export default Error404;