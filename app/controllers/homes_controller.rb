class HomesController < ApplicationController
  def index
    if current_user
      tweets = Tweet.new
    end
  end
end
