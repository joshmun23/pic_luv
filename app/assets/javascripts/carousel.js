var $data = $.get('/tweets/new', function(response) {
  for (i = 0; i < response.length; i++){
    currentSelector = '.carousel-container #' + i
    tweets = $.parseJSON(response[i])
    imgURL = tweets.photo_url[0]

    $(currentSelector).append('<li><img src=' + imgURL + '></li>');
  };
});

$('.carousel-container').on('click', '.carousel-item', function() {
  currentPic = $(this).find('img');
  currentPicID = $(this).attr('id');
  $('#feature-pic-container').html(currentPic).fadeIn('slow');
});
