class Game < ApplicationRecord
  serialize :initial_board, Array
  serialize :current_board, Array

  def self.generate_game(level)
    case level
    when "easy"
      game = Game.find_by(name:'easy')
      Game.new(initial_board: game.initial_board, current_board: game.initial_board)
    when "medium"
      game = Game.find_by(name:'medium')
      Game.new(initial_board: game.initial_board, current_board: game.initial_board)
    when "hard"
      game = Game.find_by(name:'hard')
      Game.new(initial_board: game.initial_board, current_board: game.initial_board)
    end
  end

  #logic to handle solving board ----------------------------------------------

  #function that finds the next empty space

  #function that checks if a number is used in current row

  #function that checks if a number is used in current column

  #function that checks if a number is used in current box

  #function that checks if a number can be placed in location based on previous three methods

  #function that ties it all together and attemps to solve the sudoku




end
