class TweetsController < ApplicationController
  def index
  end

  def new
    @tweets = Tweet.first.mentions

    render json: @tweets
  end
end
