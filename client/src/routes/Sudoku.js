import React from 'react'
import NewSudoku from './NewSudoku'
import LoadSudoku from './LoadSudoku'
import NavBar from '../components/NavBar'
import LoadButtonContainer from "../containers/LoadButtonContainer"

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
        <NavBar value={<LoadButtonContainer/>}/>
        <Switch>
          <Route exact path="/sudoku/new/:difficulty" component={NewSudoku} />
          <Route path="/sudoku/:id" component={LoadSudoku} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default withRouter(Sudoku)