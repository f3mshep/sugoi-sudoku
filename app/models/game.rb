class Game < ApplicationRecord
  serialize :initial_board, Array
  serialize :current_board, Array

  def self.generate_game(level)
    case level
    when "easy"
      game = Game.new(difficulty: 'easy', current_board: EASY_BOARD, initial_board: EASY_BOARD)
    when "medium"
      game = Game.new(difficulty: 'medium', current_board: MEDIUM_BOARD, initial_board: MEDIUM_BOARD)
    when "hard"
      game = Game.new(difficulty: 'hard', current_board: HARD_BOARD, initial_board: HARD_BOARD)
    when "insanity"
      game = Game.new(difficulty: 'insanity', current_board: INSANE_BOARD, initial_board: INSANE_BOARD)
    else
      game = Game.new(difficulty: 'easy', current_board: EASY_BOARD, initial_board: EASY_BOARD)
    end
      game.new_state
  end

  def new_state
    new_board = initial_board
    new_board = BoardSwap.new(new_board)
    self.initial_board = new_board.swapped_board
    self.current_board = new_board.swapped_board
    # self.solution = self.solve
    #if performance takes a hit, move solution to another action, such as check
    self
  end

  def solve
    board_solver = Solver.new(initial_board)
    self.solution = board_solver.solution
  end

  # logic to handle solving board ----------------------------------------------


  #function that ties it all together and attemps to solve the sudoku

    #logic:

    #keep track of current position

    #find the closest empty cell

    #using the above logic, try to fill in the current position with a valid number

    #RECURSE with updated board, return true if it is able to return true (lol recusion u silly)

    #
  EASY_BOARD = [
  [0, 7, 5, 0, 9, 8, 0, 2, 3],
  [3, 0, 0, 1, 0, 7, 0, 5, 0],
  [8, 0, 6, 0, 5, 0, 0, 0, 0],
  [2, 3, 0, 5, 0, 0, 0, 0, 0],
  [0, 6, 0, 3, 0, 2, 0, 9, 0],
  [0, 0, 0, 0, 0, 6, 0, 1, 2],
  [0, 0, 0, 0, 2, 0, 1, 0, 9],
  [0, 1, 0, 9, 0, 4, 0, 0, 7],
  [6, 9, 0, 8, 3, 0, 2, 4, 0]
]

  MEDIUM_BOARD = [
  [8, 9, 0, 0, 1, 0, 0, 5, 0],
  [0, 0, 0, 0, 0, 9, 6, 7, 0],
  [0, 3, 0, 2, 0, 5, 0, 0, 0],
  [0, 8, 0, 7, 0, 0, 0, 0, 2],
  [0, 0, 5, 0, 6, 0, 4, 0, 0],
  [2, 0, 0, 0, 0, 8, 0, 6, 0],
  [0, 0, 0, 8, 0, 3, 0, 9, 0],
  [0, 6, 9, 5, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 2, 0, 0, 1, 4]
]

  HARD_BOARD = [
  [0, 0, 0, 0, 0, 0, 0, 8, 0],
  [0, 7, 4, 0, 6, 3, 5, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 9, 0, 0, 2, 0, 3, 0],
  [0, 0, 8, 9, 0, 4, 6, 0, 0],
  [0, 2, 0, 3, 0, 0, 9, 0, 0],
  [4, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 3, 4, 5, 0, 2, 9, 0],
  [0, 5, 0, 0, 0, 0, 0, 0, 0]
]

INSANE_BOARD = [
  [6, 0, 7, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 3, 0, 0, 0, 0],
  [0, 5, 8, 7, 0, 0, 0, 0, 2],
  [7, 0, 0, 0, 0, 9, 4, 0, 8],
  [0, 0, 0, 4, 0, 2, 0, 0, 0],
  [2, 0, 1, 8, 0, 0, 0, 0, 6],
  [3, 0, 0, 0, 0, 1, 8, 6, 0],
  [0, 0, 0, 0, 9, 0, 0, 0, 0],
  [0, 0, 9, 0, 0, 0, 5, 0, 4]
]

end
