$.fn.hungryscroller = function(options) {

  var scrollAmount = document.body['clientHeight'];

  function pageScroll(speed) {
    $('body,html').animate({scrollTop: scrollAmount}, speed);
  }

  function stopScroll() {
    $('body,html').stop();
  }
  //define default settings
  var settings = {
    slowSpeed: 45000, //scrolls through document in 45 seconds
    medSpeed: 22000, //scrolls through document in 22 seconds
    fastSpeed: 15000 //scrolls through document in 15 seconds
  };
  //merge user provided options into defaults 
  $.extend(settings, options);
  console.log(settings);

  //different clicks will give different speeds
  $('.slow').on('click', function(){
    pageScroll(settings.slowSpeed);
    $('.scroll').text('Stop Scroll');
    $('.speeds').toggle();
    $('.scroller').toggleClass('left-list-border');
    
  });
  $('.med').on('click', function(){
    pageScroll(settings.medSpeed);
    $('.scroll').text('Stop Scroll');
    $('.speeds').toggle();
    $('.scroller').toggleClass('left-list-border');
    
  });
  $('.fast').on('click', function(){
    pageScroll(settings.fastSpeed);
    $('.scroll').text('Stop Scroll');
    $('.speeds').toggle();
    $('.scroller').toggleClass('left-list-border');
    
  });    
  $('.scroll').on('click', function(){
    stopScroll();
    $('.scroll').text('Start Scroll');
    $('.speeds').toggle();
    $('.scroller').toggleClass('left-list-border');
  });
  return this;
};

//Easter Egg Munch
var muncha = $('#munch')[0];
Mousetrap.bind('m u n c h', function() {
  muncha.play(); 
  setTimeout (function(){
    $('.munch-top').css('display', 'block');
    $('.munch-top').animate({
      marginTop: '-5%'
    }, 600);
    $('.munch-top').animate({
      marginTop: '-35%'
    }, 600);


    $('.munch-bottom').css('display', 'block');
    $('.munch-bottom').animate({
      marginBottom: '-5%'
    }, 600);
    $('.munch-bottom').animate({
      marginBottom: '-35%'
    }, 600);
  });
});