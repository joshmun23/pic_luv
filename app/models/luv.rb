class Luv < ActiveRecord::Base
  def index
  end

  def connect_tinder
    pyro = TinderPyro::Client.new
    pyro.sign_in(FACEBOOK_ID, FACEBOOK_TOKEN)
  end
end
