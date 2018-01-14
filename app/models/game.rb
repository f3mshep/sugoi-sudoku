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

  # logic to handle solving board ----------------------------------------------

  # function that finds the next empty space
  def find_empty_space(board_matrix)
    board_matrix.each_with_index do |row, i|
      row.each_with_index do |cell, j|
        return [i, j] if cell == 0
      end
    end
    false
  end

  #function that checks if a number is used in current row
  def in_row?(board_matrix, number, location)
    #location is an array [i,j], i is outer index, j is inner
    row = board_matrix[location.first]
    row.include?(number)
  end
  #function that checks if a number is used in current column
  def in_column?(board_matrix, number,location)
    column = board_matrix.select_with_index do |row, i|
      row.select_with_index do |cell, j|
        j if j == location[1]
      end
    end

    column.include?(number)
  end
  #function that checks if a number is used in current box
  def in_box?(board_matrix, number, location)
    3.times do
      i = 0
      3.times do
        j = 0
        return false if board_matrix[i + location[0]][j + location[1] == number
        j += 1
      end
      i += 1
    end
    return true
  end
  #function that checks if a number can be placed in location based on previous three methods

  def can_place?(board_matrix, number, location)
    return false if in_row?(board_matrix, number, location)
    return false if in_column?(board_matrix, number, location)
    return false if in_box?(board_matrix, number, location)
    return true
  end
  #function that ties it all together and attemps to solve the sudoku

    #logic:

    #keep track of current position

    #find the closest empty cell

    #using the above logic, try to fill in the current position with a valid number

    #RECURSE with updated board, return true if it is able to return true (lol recusion u silly)

    #


end
