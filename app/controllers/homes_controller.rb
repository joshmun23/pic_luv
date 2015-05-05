class HomesController < ApplicationController
  def index
    @tweets = Tweet.first.mentions
  end
end
