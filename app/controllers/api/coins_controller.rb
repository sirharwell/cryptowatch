class Api::CoinsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_coin, only: [:show, :update, :destory]
  BASE_URL = 'https://api.coinmarketcap.com/v1/ticker/'

  def index
    render json: current_user.coins
  end

  def create
  end

  def show
    render json: @coin
  end

  def update
    current_user.watched_coins.find_by(coin_id: @coin.id).destroy
  end

  def destroy
    @coin.destroy
  end
end
