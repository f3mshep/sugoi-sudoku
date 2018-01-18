import React from 'react'
import NewSudoku from './NewSudoku'
import LoadSudoku from './LoadSudoku'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'


const Sudoku = () => (
  <div>
     {/* <div className="container">
       <div className="row justify-content-center">
         <div className="top-buffer col-md-10 content-box thicc">
           <h2 className='header-text'>Saved Games</h2>
           <hr/>
         </div>
       </div>
     </div> */}
    <Router>
      <div>
        <Switch>
          <Route exact path="/sudoku/new/:difficulty" component={NewSudoku} />
          <Route path="/sudoku/:id" component={LoadSudoku} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default withRouter(Sudoku)