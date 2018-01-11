class Game < ApplicationRecord
  serialize :initial_board, Array
  serialize :current_board, Array

  def self.generate_game(level)
    case level
    when "easy"
      game = Game.find_by(name:'easy')
      Game.new(initial_board: game.initial_board)
    when "medium"
      game = Game.find_by(name:'medium')
      Game.new(initial_board: game.initial_board)
    when "hard"
      game = Game.find_by(name:'hard')
      Game.new(initial_board: game.initial_board)
    end
  end

end
