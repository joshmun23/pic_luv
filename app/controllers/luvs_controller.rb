class LuvsController < ApplicationController
  def index
    @users = Luv.new.get_nearby_users
  end
end
