class TweetsController < ApplicationController
  def index
  end

  def new
    @tweets = Tweet.new.mentions

    render json: @tweets
  end
end
