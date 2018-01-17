import React from 'react'

const About = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="top-buffer col-md-10 content-box">
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
          Sudoku played to the strengths of React as well as Redux. React allows
          the creation of a complex UI that "reacts" quickly to user input, due
          to the virtual DOM structure it creates. This is ideal for the sudoku
          board, there are a total of 81 cells that each need to respond to a
          user's input! Redux allows an application to have a centralized
          location to store all the data about what is going on in the
          application, known as state. Having a centralized location for the
          state of the sudoku grid makes it simplier for data persistance, and
          to make the flow of data easier to understand.
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