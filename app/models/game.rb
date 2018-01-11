class Game < ApplicationRecord
  serialize :initial_board, Array
  serialize :current_board, Array

  # def generate_game(level)
  #   case level
  #   when "easy"

  #   when "medium"
  #   when "hard"
  # end

end
