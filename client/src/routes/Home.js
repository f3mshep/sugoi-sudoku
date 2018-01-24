import React from 'react'
import { withRouter, NavLink } from "react-router-dom";
import NavBar from "../components/NavBar"
const Home = () => (
  <div>
    <NavBar />
    <div className="container">
      <div className="row justify-content-center">
        <div className="top-buffer col-md-10 content-box">
          <h2>What is Sudoku?</h2>
          <hr />
          <p>
            Sudoku is a puzzle game composed of a 3x3 grid of 9 boxes. Inside each
            box is another 3x3 grid (called a region) with 9 cells.
          </p>
          <p>
            A cell is the smallest unit in the game. The object of the game is to
            fill each cell with a number from 1-9. The twist is that each row,
            column, and region must have exactly 1 number from 1-9.{" "}
          </p>
          <p>
            Each sudoku puzzle comes with clues, which are numbers that are
            already placed on the board. Clues cannot be moved around or changed.
            Each cell has only one correct answer. It is the player's task to find
            out what number goes where!{" "}
          </p>
          <br />
          <NavLink className="btn btn-lg btn-primary" to="/sudoku/new/easy">
            Let's Play Sudoku!
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(Home)