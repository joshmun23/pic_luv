$('.carousel-item').click(function(e) {
  prompt("works!");
  var firstItem = $('#first')[0].firstChild.nextSibling;
  var secondItem = $('#second')[0].firstChild.nextSibling;
  var thirdItem = $('#third')[0].firstChild.nextSibling;

  var firstSlot = $('#first')[0];
  var secondSlot = $('#first')[0];
  var thirdSlot = $('#first')[0];

  var currentPic = e.target;

  $('.featured-pic').add('#first')[0].firstChild.nextSibling;
  debugger;
});
