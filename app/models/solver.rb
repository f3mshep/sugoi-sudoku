class Solver
  attr_reader :initial_board
  attr_accessor :solution

  def initialize(initial_board)
    self.initial_board = initial_board
    sudoku_solver(initial_board)
  end

# function that finds the next empty space
   def find_empty_space(board_matrix)
    board_matrix.each_with_index do |row, i|
      row.each_with_index do |cell, j|
        return [i, j] if cell == 0
      end
    end
    false
  end

  def in_row?(board_matrix, number, location)
    #location is an array [i,j], i is outer index, j is inner
    row = board_matrix[location.first]
    row.include?(number)
  end
  #function that checks if a number is used in current column
  def in_column?(board_matrix, number,location)
    column = []
    board_matrix.each_with_index do |row, i|
      row.each_with_index do |cell, j|
        column << cell if j == location[1]
      end
    end
    column.include?(number)
  end

  def get_box(board_matrix, location)
    x = 3 * (location[1] / 3)
    y = 3 * (location[0] / 3)
    box = []

    3.times do |i|
      3.times do |j|
        box << board_matrix[y + j][x + i]
      end
    end

    box
  end

  #function that checks if a number is used in current box
  def in_box?(board_matrix, number, location)
    box = get_box(board_matrix, location)
    box.include?(number)
  end
  #function that checks if a number can be placed in location based on previous three methods

  def can_place?(board_matrix, number, location)
    return false if in_row?(board_matrix, number, location)
    return false if in_column?(board_matrix, number, location)
    return false if in_box?(board_matrix, number, location)
    return true
  end

  def sudoku_solver(board_matrix)
    location = find_empty_space(board_matrix)
    if !location
      solution=board_matrix
      return true
    end
    tentative_number = 1
    9.times do
      if can_place?(board_matrix, tentative_number, location)
        board_matrix[location[0]][location[1]] = tentative_number
        if sudoku_solver(board_matrix)
          return true
        end
      end
      tentative_number += 1
    end
    board_matrix[location[0]][location[1]] = 0
    return false
  end

end