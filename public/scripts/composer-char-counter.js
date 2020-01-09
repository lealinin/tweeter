$(document).ready(function() {
  $('textarea').keyup(function() {
    // console.log('test');
    let length = $(this).val().length;
    let counter = 140;
    if (counter - length < 0) {
      $('.counter').css("color", "#DC143C");
    } else {
      $('.counter').css("color", "#545149");
    }
    $('.counter').text(counter - length);
  })
});