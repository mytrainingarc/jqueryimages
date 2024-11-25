$(document).ready(function() {
    // thumbnail cap
    $('#thumbs img').click(function() {
      var newSrc = $(this).attr('src');
      var newAlt = $(this).attr('alt');
  
      $('#lgPic').attr('src', newSrc);
      $('#lgPic').attr('alt', newAlt);
      $('#lgTitle').text(newAlt);
    });
  
    // hover fx
    $('#thumbs img').hover(function() {
      $(this).css({
        'border': '2px solid darkgreen',
        'box-shadow': '0 0 10px rgba(0, 128, 0, 0.6)'
      });
    }, function() {
      $(this).css({
        'border': 'none',
        'box-shadow': 'none'
      });
    });
  
    // new window
    $('#lgPic').click(function() {
      var imageUrl = $(this).attr('src');
      
      // img in new window
      window.open(imageUrl, '_blank');
    });
  });
  