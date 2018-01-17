class Game < ApplicationRecord
  serialize :initial_board, Array
  serialize :current_board, Array

  def self.generate_game(level)
    case level
    when "easy"
      game = Game.find_by(name:'easy')
    when "medium"
      game = Game.find_by(name:'medium')
    when "hard"
      game = Game.find_by(name:'hard')
    else
      game = Game.find_by(name:'easy')
    end
      new_game = Game.new
      new_game.initial_board = game.initial_board
      new_game.current_board = game.initial_board
      new_game.new_state
  end

  def new_state
    new_board = initial_board
    new_board = BoardSwap.new(new_board)
    self.initial_board = new_board.swapped_board
    self.current_board = new_board.swapped_board
    self
  end

  # logic to handle solving board ----------------------------------------------


  #function that ties it all together and attemps to solve the sudoku

    #logic:

    #keep track of current position

    #find the closest empty cell

    #using the above logic, try to fill in the current position with a valid number

    #RECURSE with updated board, return true if it is able to return true (lol recusion u silly)

    #


end
