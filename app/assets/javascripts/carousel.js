var $data = $.get('/tweets/new', function(response) {
  for (i = 0; i < response.length; i++){
    currentSelector = '.carousel-container #' + i;
    tweets = $.parseJSON(response[i]);
    imgURL = tweets.photo_url[0];

    $(currentSelector).append('<li><img src=' + imgURL + '></li>');

    $('#feature-pic-container').append('<img class=hidden id=img-' + i + ' src=' + imgURL + '>');
  };
});

$('.carousel-container div').on('click mouseenter', '.carousel-item', function(e) {
  e.preventDefault;
  $('#feature-pic-container img').slideUp(500, function(){
    $('#feature-pic-container').removeClass('hidden');
    $('#feature-pic-container').addClass('show');
  });

  currentPic = $(this).find('img');
  currentPicID = $(this).attr('id');
  $('#feature-pic-container img#img-' + currentPicID).slideDown(500, function(){
    $('#feature-pic-container').removeClass('hidden');
    $('#feature-pic-container').addClass('show');
  });
});

// $('.carousel-container div').on('click', '.carousel-item', function(e) {
//   e.preventDefault;
//   $('#feature-pic-container img#img-' + currentPicID).delay(500).fadeOut(1000, function(){
//     $('#feature-pic-container').removeClass('show');
//     $('#feature-pic-container').addClass('hidden');
//   });
// });
