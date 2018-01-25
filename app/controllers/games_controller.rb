class GamesController < ApplicationController
  before_action :game_setter, only: [:update, :show]


  def new
    @game = Game.generate_game(params[:difficulty])
    render json: @game
    #request would look something like  GET api/game/new/medium
  end

def do_something_with_params
  params.to_unsafe_h.slice
end

  def create
    @game = Game.create
    #todo: get the .require.permit working
    binding.pry
    @game.initial_board = params[:game][:initial_board]
    @game.current_board = params[:game][:current_board]
    @game.difficulty = params[:game][:difficulty]
    @game.solution = params[:game][:solution]
    @game.save
    render json: @game
  end

  def check
    # GET /check with JSON payload of solution
    @game = Game.new
    @game.initial_board = params[:game][:initial_board]
    @game.current_board = params[:game][:current_board]
    @game.solve
    render json: @game
  end

  def update
    @game.current_board = params[:game][:current_board]
    @game.save
    render json: @game
    #POST api/game/id with a JSON payload of the game
    #response contains an ID
  end

  def index
    render json: Game.last(4).reverse
  end

  def show
    #GET api/game/id
    @game = Game.generate_game('easy') if @game.nil?
    render json: @game
  end

  private

  def game_setter
    @game = Game.find_by(id: params[:id])
  end

  def game_params
    # this doesn't work yet
    # I can change actionpack gem with this PR: https://github.com/rails/rails/pull/23650/files
    params.require(:game).permit(:difficulty, {solution_attributes:[[],[],[],[],[],[],[],[],[]]},{current_board:[[],[],[],[],[],[],[],[],[]]}, {initial_board:[[],[],[],[],[],[],[],[],[]]})
  end

end
