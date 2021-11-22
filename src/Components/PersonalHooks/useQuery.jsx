import {useLocation} from "react-router-dom";
//Función que recibira el parametro de search de uselocatión
export function useQuery() {      
    return new URLSearchParams(useLocation().search);
  }   