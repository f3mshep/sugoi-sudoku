import React from 'react'
import NewSudoku from './NewSudoku'
import LoadSudoku from './LoadSudoku'
import Home from "./Home"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'


const Sudoku = () => (
  <div>
    <Router>
      <div>
        <Switch>
          <Route exact path="/sudoku/new/:difficulty" component={NewSudoku} />
          <Route path="/sudoku/:id" component={LoadSudoku} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default withRouter(Sudoku)