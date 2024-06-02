// $$(function() {
//   $('#target').addClass('heading');
// });


$(function (){
 
  $('#change-color').on('click', function () {
    $('#target').css('color','#FF3399');
  });
    
  $('#change-text').on('click', function () {
    $('#target').text("おつかれさま！");
  });
  
  $('#fade-out').on('click', function () {
    $('#target').fadeOut(2000);
  });

  $('#fade-in').on('click', function () {
    $('#target').fadeIn(2000, function(){
      $('#target').text("おひさしぶり！");
    });
  });


});

