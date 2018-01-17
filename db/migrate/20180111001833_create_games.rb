class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.text :initial_board
      t.text :current_board
      t.text :solution
      t.string :category
      t.timestamps
    end
  end
end
