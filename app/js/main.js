$('document').ready(function(){

  $('#send_end').click(function(){
    $('.modal').css('display', 'none');
    return false;
  });
  var form = $('.form');
  $('.form').submit(function(event){
      event.preventDefault();
      $.ajax({
        method: "POST",
        url: form.attr('action'),
        data: form.serialize(),
        success: function(data) {
          $('.modal').css('display', 'flex');
        },
        error: function(event){
          $('.modal__body').text('Error');
          // $('.modal').css('display', 'flex');
        }
      });
    
  });

  $('#contacts-nav').click(function(){
      $('html, body').animate({
      scrollTop: $("#contacts").offset().top
    }, 1000);
  });

  $('#speaker-nav').click(function(){
    $('html, body').animate({
    scrollTop: $("#speaker").offset().top
  }, 1000);
});

$('#news-nav').click(function(){
  $('html, body').animate({
  scrollTop: $("#news").offset().top
}, 1000);
});

$('#obj-nav').click(function(){
  $('html, body').animate({
  scrollTop: $("#obj").offset().top
}, 1000);
});

$('#form-nav').click(function(){
  $('html, body').animate({
  scrollTop: $("#form").offset().top
}, 1000);
});

$('.button').click(function(){
  $('html, body').animate({
  scrollTop: $("#form").offset().top
}, 1000);
});


});