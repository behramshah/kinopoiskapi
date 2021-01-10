import React, {Suspense} from 'react';
import Header from './modules/header/Header.jsx';
import Homepage from './modules/homepage/Homepage.jsx';
import About from './modules/about/About.jsx';
import Movies from './modules/movies/Movies.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from "react-router-dom";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Download</div>}>
        <Header/>
        <Switch>
          <Route path='/' exact component={Homepage}/>
          <Route path='/about' component={About}/>
          <Route path='/movies' component={Movies}/>
        </Switch>      
      </Suspense>
    </Router>
  );
}

export default App;
