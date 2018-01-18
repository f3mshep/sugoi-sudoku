class GameSerializer < ActiveModel::Serializer
  attributes :id, :initial_board, :current_board, :solution, :difficulty,
  :time_created

  def time_created
    object.created_at.localtime.strftime("%B %d - %I:%M %p") if object.created_at
  end



end
