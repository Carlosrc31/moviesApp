import { ImSpinner3 } from 'react-icons/im';
import  './LoadPage.css'
function LoadPage(){
    return(
        <div className="spinner">
           <ImSpinner3 className="animation" size={60}/>
        </div>
    )
}
export default LoadPage;