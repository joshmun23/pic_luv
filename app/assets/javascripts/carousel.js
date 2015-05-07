$('.carousel-container').on('click', '.carousel-item', function() {
  currentPic = $(this).find('img');
  currentPicID = $(this).attr('id');
  $('#feature-pic-container').html(currentPic);
});
