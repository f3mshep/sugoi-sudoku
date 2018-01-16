import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './routes/About'
import Home from './routes/Home'
import Sudoku from './routes/Sudoku'
import Winner from './routes/Winner'

const App = props => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/sudoku" component={Sudoku} />
    </div>
  </Router>
);

export default App