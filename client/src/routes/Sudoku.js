import React from 'react'
import NewSudoku from './NewSudoku'
import LoadSudoku from './LoadSudoku'
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom'


const Sudoku = () => (
  <div>
    <Router>
      <div>
        <Route path="/sudoku/new/:difficulty" component={NewSudoku} />
        <Route path="/sudoku/:id" component={LoadSudoku} />
      </div>
    </Router>
  </div>
);

export default withRouter(Sudoku)