class GameSerializer < ActiveModel::Serializer
  attributes :id, :initial_board, :current_board, :solution, :difficulty
end
