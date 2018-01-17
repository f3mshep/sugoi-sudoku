class BoardSwap
  attr_accessor :initial_board
  attr_accessor :swapped_board

  def initialize(initial_board)
    self.initial_board = initial_board
    new_board
  end

  def number_mapper(initial_board)
    deep_copy = Marshal.load(Marshal.dump(initial_board))
    key = ("a".."i").to_a
    encrypted = deep_copy.map do |row|
      row.map do |cell|
        if cell < 1
          'z'
        else
          key[cell - 1]
        end
      end
    end
    shuffled_key = key.shuffle
    encrypted.map do |row|
      row.map.with_index do |cell, index|
        if cell == 'z'
          0
        else
          shuffled_key.index(cell) + 1
        end
      end
    end
  end

def random_rotation(matrix)
  d4 = 1 + rand(4)
  d4.times do
    deep_copy = Marshal.load(Marshal.dump(matrix))
    new_copy = deep_copy.dup.transpose.map do |row|
      row.reverse
    end
    matrix = new_copy
  end
  matrix
end

  def board_shuffle_rows(matrix)
    rand(9..100).times do
      deep_copy = Marshal.load(Marshal.dump(matrix))
      gridIndex = [0,3,6].sample
      i = rand(3) + gridIndex
      j = rand(3) + gridIndex
      print gridIndex, i, j
      deep_copy[i], deep_copy[j] = deep_copy[j], deep_copy[i]
      matrix = deep_copy
    end
    matrix
  end

  def board_shuffle_columns(matrix)
    new_board = matrix.transpose
    new_board = board_shuffle_rows(new_board)
    new_board.transpose
  end

  def new_board
    new_matrix = random_rotation(initial_board)
    new_matrix = number_mapper(new_matrix)
    new_matrix = board_shuffle_rows(new_matrix)
    self.swapped_board = board_shuffle_columns(new_matrix)
  end

end