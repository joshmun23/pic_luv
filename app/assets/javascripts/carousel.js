$('.carousel-item').click(function(e) {
  prompt("works!");
  // var firstItem = $('#first')[0].firstChild.nextSibling;
  // var secondItem = $('#second')[0].firstChild.nextSibling;
  // var thirdItem = $('#third')[0].firstChild.nextSibling;

  // var firstSlot = $('#first')[0];
  // var secondSlot = $('#first')[0];
  // var thirdSlot = $('#first')[0];

  var currentPic = e.target;

    // newMenuItem = $.ajax({
    //   url: '/users/' + currentUserID + '/menu_items/',
    //   method: 'POST',
    //   data: { currentUserID: currentUserID, restaurant: restaurant, menuItemID: menuItemID },
    //   dataType: 'json'
    // });
  $('#feature-pic-container img').className="hi"
  debugger;
  // $('.featured-pic').add('<div class="small-12 large-4 columns featured-pic"><%= image_tag "kyoto.jpg" %></div>')
  // $('.featured-pic')[0].ap(e.target);

});
