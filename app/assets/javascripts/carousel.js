var $data = $.get('/tweets/new', function(response) {
  for (i = 0; i < response.length; i++){
    currentSelector = '.carousel-container #' + i;
    tweets = $.parseJSON(response[i]);
    imgURL = tweets.photo_url[0];

    $(currentSelector).append('<li><img src=' + imgURL + '></li>');

    $('#feature-pic-container').append('<img class=hidden src=' + imgURL + '>');
  };
});

$('.carousel-container div').on('mouseover', '.carousel-item img', function(e) {
  e.preventDefault;
  debugger;
  currentPic = $(this).find('img');
  currentPicID = $(this).attr('id');
  $('#feature-pic-container').removeClass('hidden');
  $('#feature-pic-container').addClass('hidden');

});
