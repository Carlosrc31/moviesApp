import { Fragment } from 'react/cjs/react.production.min';
import './App.css';
import { Homepage, MovieInfo } from "./Components"
import {
  BrowserRouter as Router,
  Route, 
  Routes as Switch,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <Fragment>
      <Router>
        <header>
          {/* Al dar click en "movies" nos manda a la Homepage */}
           <NavLink to="/"> 
            <div className="homeIcon">
              <img src="clapperboard.png" />
              <h1 className="header_title"> MoviExpert</h1> </div>
          </NavLink>
        </header>
        <main>
          {/* Rutas para cada caso de la página */}
          <Switch>
              <Route path="/movies/:movieId" element={<MovieInfo/>} />{/**/}
              <Route exact path="/" element={<Homepage/>} />
              {/* Caso para cualquier página que no exista, hacer un componente de */}
              <Route path="/" >
              </Route>
          </Switch>
        </main>
      </Router>
    </Fragment>
  );
}

export default App;
