class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.text :initial_board
      t.text :current_board
      t.string :name
    end
  end
end
