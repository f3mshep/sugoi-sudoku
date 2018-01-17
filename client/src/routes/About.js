import React from 'react'

const About = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="top-buffer col-md-10 content-box thicc">
        <h2>Sudoku Now</h2>
        <p>A sudoku web application built by Alexandra Wright.</p>
        <hr />
        <h3>Why Sudoku?</h3>
        <p>
          The web development world is constantly in flux with new technologies
          coming and going. React and Redux are some of the most popular, and I
          wanted to learn how to use them. In my experience, the best way to
          learn a new technology is to build something with it!
        </p>
        <p>
          While there are a million ways to write a sudoku application,
          I can leverage the strengths of React and Redux to solve the more
          interesting problems writing a sudoku application presents. React allows
          the creation of a complex UI that "reacts" quickly to user input, due
          to the virtual DOM structure it creates. This is ideal for the sudoku
          board, there are a total of 81 cells that each need to respond to a
          user's input!
        </p>
        <p>
          Redux creates a centralized
          location to store all the data about what is going on in the
          application, known as state. Having a centralized location for the
          state of the sudoku grid makes it simplier to store information
          about the state of the board, which makes it easier to save, load, and
          reset the board state.
        </p>
        <h3>Under the hood:</h3>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>React</li>
          <li>Redux</li>
          <li>Rails API</li>
        </ul>
      </div>
    </div>
  </div>
);

export default About