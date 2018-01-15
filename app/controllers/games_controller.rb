class GamesController < ApplicationController
  before_action :game_setter, only: [:update, :show]


  def new
    @game = Game.generate_game('easy')
    render json: @game
        #handles a new game instance
    #user will click easy, medium, or hard
    #request would look something like  GET api/game/new/medium
    #response will contain a valid board of appropriate difficulty
  end

  def create
    @game = Game.create
    binding.pry
    # POST api/game with a JSON payload of the game.
    # response contains an ID
  end

  def check
    # POST api/game/check/id with JSON payload of game, will return true or false
  end

  def update
    binding.pry
    #POST api/game/id with a JSON payload of the game
    #response contains an ID
  end

  def index
    render json: Game.all
  end

  def show
    #GET api/game/id
    render json: @game
  end

  private

  def game_setter
    @game = Game.find_by(id: params[:id])
  end

end
