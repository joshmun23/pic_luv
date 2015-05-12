class Pick < ActiveRecord::Base
  def create_or_fetch_tinder_user
    user = TinderPhotos.where(user_id: self.id)

    if !user.empty?

    end
  end
end
