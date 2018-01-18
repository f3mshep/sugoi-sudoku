import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './routes/About'
import Home from './routes/Home'
import Sudoku from './routes/Sudoku'
import FooterBar from "./components/FooterBar.js";
import { withRouter } from "react-router-dom";
const App = props => (
  <div className="app">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path={`/sudoku`} component={Sudoku} />
    </Switch>
    <FooterBar />
  </div>
);

export default withRouter(App)