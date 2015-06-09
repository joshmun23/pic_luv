var $data = $.get('/tweets/new', function(response) {
  var tweets;
  for (i = 0; i < response.length; i++){
    currentSelector = '.carousel-container #' + i;
    tweets = $.parseJSON(response[i]);
    var imgURL = tweets.photo_url[0];
    debugger;

    $(currentSelector).append('<li><img src=' + imgURL + '></li>');

    $('.feature-pic-container').append('<img class="hidden" id=img-' + i + ' src=' + imgURL + '>');
    $('.feature-tweet-container').append('<fieldset class="hidden" id=tweet-' + i + '>' + tweets.text + '</fieldset>');
  };
});

$('.carousel-container').on('click', '.carousel-item', function(e) {
  e.preventDefault;
  currentPic = $(this).find('img');
  currentPicID = $(this).attr('id');

  $('.hidden .show').fadeOut(400);
  $('.hidden .show').removeClass('show');

  // $('#feature-pic-container img' + currentPicID).fadeOut(400, function(){
    // $('#feature-pic-container').removeClass('hidden');
    // $('#feature-pic-container').addClass('show');
  // });

  $('.feature-pic-container img#img-' + currentPicID).delay(400).fadeToggle(800, function(){
    $('.feature-pic-container img#img-' + currentPicID).addClass('show');
  });

  $('.feature-tweet-container fieldset#tweet-' + currentPicID).delay(400).fadeToggle(800, function(){
    $('.feature-tweet-container fieldset#tweet-' + currentPicID).addClass('show');
  });

});

function fadeCurrentPhoto(e) {
  $('.show').removeClass('show');
  debugger;
};
