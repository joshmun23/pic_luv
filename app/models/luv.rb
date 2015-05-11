class Luv < ActiveRecord::Base
  def connect_tinder
    pyro = TinderPyro::Client.new
    pyro.sign_in(ENV['FACEBOOK_ID'], ENV['FACEBOOK_TOKEN'])
    pyro
  end

  def get_nearby_users
    users = []
    1.times do
      users << connect_tinder.get_nearby_users
    end

    users
  end
end
