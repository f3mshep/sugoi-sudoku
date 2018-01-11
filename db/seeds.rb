# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Game.create(name: 'easy',
initial_board: [
  [0, 7, 5, 0, 9, 8, 0, 2, 3],
  [3, 0, 0, 1, 0, 7, 0, 5, 0],
  [8, 0, 6, 0, 5, 0, 0, 0, 0],
  [2, 3, 0, 5, 0, 0, 0, 0, 0],
  [0, 6, 0, 3, 0, 2, 0, 9, 0],
  [0, 0, 0, 0, 0, 6, 0, 1, 2],
  [0, 0, 0, 0, 2, 0, 1, 0, 9],
  [0, 1, 0, 9, 0, 4, 0, 0, 7],
  [6, 9, 0, 8, 3, 0, 2, 4, 0]
]
)

Game.create(name: 'medium', initial_board:[
  [8, 9, 0, 0, 1, 0, 0, 5, 0],
  [0, 0, 0, 0, 0, 9, 6, 7, 0],
  [0, 3, 0, 2, 0, 5, 0, 0, 0],
  [0, 8, 0, 7, 0, 0, 0, 0, 2],
  [0, 0, 5, 0, 6, 0, 4, 0, 0],
  [2, 0, 0, 0, 0, 8, 0, 6, 0],
  [0, 0, 0, 8, 0, 3, 0, 9, 0],
  [0, 6, 9, 5, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 2, 0, 0, 1, 4]
])

Game.create(name: 'hard', initial_board: [
  [0, 0, 0, 0, 0, 0, 0, 8, 0],
  [0, 7, 4, 0, 6, 3, 5, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 9, 0, 0, 2, 0, 3, 0],
  [0, 0, 8, 9, 0, 4, 6, 0, 0],
  [0, 2, 0, 3, 0, 0, 9, 0, 0],
  [4, 0, 0, 0, 0, 0, 0, 0, 5],
  [0, 0, 3, 4, 5, 0, 2, 9, 0],
  [0, 5, 0, 0, 0, 0, 0, 0, 0]
] )

  # [0, 0, 0, 0, 0, 0, 0, 0, 0],
  # [0, 0, 0, 0, 0, 0, 0, 0, 0],
  # [0, 0, 0, 0, 0, 0, 0, 0, 0],
  # [0, 0, 0, 0, 0, 0, 0, 0, 0],
  # [0, 0, 0, 0, 0, 0, 0, 0, 0],
  # [0, 0, 0, 0, 0, 0, 0, 0, 0],
  # [0, 0, 0, 0, 0, 0, 0, 0, 0],
  # [0, 0, 0, 0, 0, 0, 0, 0, 0],
  # [0, 0, 0, 0, 0, 0, 0, 0, 0]