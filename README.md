# SudokuNow

Sudoku Now is a web application for the sudoku puzzle game. Users can play a unique sudoku puzzle at a 'easy', 'medium', 'hard', and 'insanity' levels. The rails API generates sudoku puzzles out of curated 'seed' puzzles, and solves each puzzle with a backtracking algorithm. It uses a React-Redux to display data from the Rails API, with a clean, responsive UI.

## Installation


To set up a local instance of this web app, clone this repository. Please ensure you have PostGres working properly on your computer. In the root of the application, run the following commands:

```
rails db:create
```

and 

```
rake db:migrate
```

After setting up the database, change directory to the 'client' folder, which contains the react application. Run 

```
npm install
```

And you are ready to play sudoku!

## Usage

Run the following command:

```
rails start
```

This will set up a local server hosting the web app, 'start' is aliased as a rake task to start both the react application as well as the Rails API.  Navigate to [Local Host](tcp://0.0.0.0:3000) try it out!

## Development

Developed by Alexandra Wright

## Contributing

Pull requests are welcome! Please follow the [Contributor's Code of Conduct](https://www.contributor-covenant.org/).
