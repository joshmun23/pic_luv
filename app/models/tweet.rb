class Tweet < ActiveRecord::Base
  def streaming_client
    client = Twitter::Streaming::Client.new do |config|
      config.consumer_key        = ENV['TWITTER_API_KEY']
      config.consumer_secret     = ENV['TWITTER_API_SECRET']
      config.access_token        = ENV['TWITTER_TOKEN']
      config.access_token_secret = ENV['TWITTER_TOKEN_SECRET']
    end
  end

  def random_sample
    streaming_client.sample do |object|
      puts object.text if object.is_a?(Twitter::Tweet)
    end
  end

  def mentions
    #add ability to dynamically search for mentioned items
    topics = ["coffee", "tea"]
    results = []
    streaming_client.filter(track: topics.join(",")) do |object|
      next if object.media.empty?
      result = fetch_photo_info(object)

      results << result
      if results
        break if results.size == 3
      end
    end

    results
  end

  def fetch_photo_info(object)
    result = {}

    result['id'] = object.id
    result['user_id'] = object.user.id
    result['created_at'] = object.created_at
    result['photo_url'] = fetch_photo_urls(object)
    result['text'] = object.text

    result.to_json
  end

  def fetch_photo_urls(object)
    photo_urls = []
    photos = object.media.to_a

    photos.each do |text|
      url = JSON.parse(text.to_json)
      photo_urls << url['media_url']
    end

    photo_urls
  end
end
