class GamesController < ApplicationController

  def new
    @game = Game.generate_game('easy')
    render json: @game
        #handles a new game instance
    #user will click easy, medium, or hard
    #request would look something like  GET api/game/new/medium
    #response will contain a valid board of appropriate difficulty
  end

  def create
    # POST api/game with a JSON payload of the game.
    # response contains an ID
  end

  def check
    # POST api/game/check/id with JSON payload of game, will return true or false
  end

  def update
    #POST api/game/id with a JSON payload of the game
  end

  def show
    #GET api/game/id
  end

end
