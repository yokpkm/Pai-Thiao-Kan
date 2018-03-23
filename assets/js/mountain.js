// ------------- VARIABLES ------------- //
var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
var slideDurationSetting = 600; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".background").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
  if (isFirefox) {
    //Set delta for Firefox
    delta = evt.detail * (-120);
  } else if (isIe) {
    //Set delta for IE
    delta = -evt.deltaY;
  } else {
    //Set delta for all other browsers
    delta = evt.wheelDelta;
  }

  if (ticking != true) {
    if (delta <= -scrollSensitivitySetting) {
      //Down scroll
      ticking = true;
      if (currentSlideNumber !== totalSlideNumber - 1) {
        currentSlideNumber++;
        nextItem();
      }
      slideDurationTimeout(slideDurationSetting);
    }
    if (delta >= scrollSensitivitySetting) {
      //Up scroll
      ticking = true;
      if (currentSlideNumber !== 0) {
        currentSlideNumber--;
      }
      previousItem();
      slideDurationTimeout(slideDurationSetting);
    }
  }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
  setTimeout(function() {
    ticking = false;
  }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
  var $previousSlide = $(".background").eq(currentSlideNumber - 1);
  $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
  var $currentSlide = $(".background").eq(currentSlideNumber);
  $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}

var state = 0;
var data = 1;
var i;
function place(x) {
    state = x;
    data = data - x;
    console.log('data - x : ' + data);
    switch(data){
      case -1:{
        currentSlideNumber++;
        nextItem();
        data = state;
        break;

   

      }
    
      

      case -2:{
        
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
       
        data = state;
        break;
      }
      case -3:{
        
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
       
        data = state;
        break;
      }
      case -4:{
        
        currentSlideNumber++;
        nextItem();
       currentSlideNumber++;
        nextItem();
       currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();

        data = state;
        break;
      }
      case -5:{
        
        currentSlideNumber++;
        nextItem();
       currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();

        data = state;
        break;
      }
      case -6:{
      
        currentSlideNumber++;
        nextItem();
       currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();


        data = state;
        break;
      }
      case -7:{
       
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();


        data = state;
        break;
      }
      case -8:{
        
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
       



        data = state;
        break;
      }
      case -9:{
       
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
       


        data = state;
        break;
      }
      case -10:{
        
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();
        currentSlideNumber++;
        nextItem();

       
        data = state;
        break;
      }
        case 1:{
        currentSlideNumber--;
        previousItem();
        data = state;
        break;
      }
      case 2:{
       
        currentSlideNumber--;
        previousItem();
        currentSlideNumber--;
        previousItem();
       

        data = state;
        break;
      }
      case 3:{
        
        currentSlideNumber--;
        previousItem();
        currentSlideNumber--;
        previousItem();
        currentSlideNumber--;
        previousItem();
       
        data = state;
        break;
      }
      case 4:{
        
        currentSlideNumber--;
        previousItem();
        currentSlideNumber--;
        previousItem();
        currentSlideNumber--;
        previousItem();
        currentSlideNumber--;
        previousItem();
       
        data = state;
        break;
      }
      case 5:{
       
        currentSlideNumber--;
        previousItem();
        currentSlideNumber--;
        previousItem();
        currentSlideNumber--;
        previousItem();
        currentSlideNumber--;
        previousItem();
        currentSlideNumber--;
        previousItem();
       
        data = state;
        break;
      }
      case 6:{
      
        currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
       
        data = state;
        break;
      }
      case 7:{
    
        currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
       
        data = state;
        break;
      }
      case 8:{
       
        currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
       
        data = state;
        break;
      }
      case 9:{
       
        currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
       
        data = state;
        break;
      }
      case 10:{
        
        currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
         currentSlideNumber--;
        previousItem();
       
        data = state;
        break;
      }
    }

    // currentSlideNumber++;
    // nextItem();

    console.log('state : ' + state);
    console.log('data : ' + data);
    console.log('x : ' + x);
    // currentSlideNumber++;
    // nextItem();
}


// ****************














// **********************

$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});


// ******************

$(document).ready(function() {

  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;

    $('.parent2').on('mousedown touchstart', function() {
    
    if (!active1) $(this).find('.test1').css({'background-color':
     '#0000009e', 'transform': 'translate(-89px,-32px)'});

    else $(this).find('.test1').css({'background-color': 
      '#0000009e', 'transform': 'none'}); 

     if (!active2) $(this).find('.test2').css({'background-color': 
      '#0000009e', 'transform': 'translate(-91px,50px)'});

    else $(this).find('.test2').css({'background-color': 
      '#0000009e', 'transform': 'none'});

      if (!active3) $(this).find('.test3').css({'background-color': 
        '#0000009e', 'transform': 'translate(0px,80px)'});

    else $(this).find('.test3').css({'background-color': 
      '#0000009e', 'transform': 'none'});

    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});

// *******************

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {

  if (isPlaying) {
    myAudio.pause()
  } else {
    myAudio.play();
  }
};
myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};



$('btn.onBtn').on('click', function(e){
    e.preventDefault();
    $button = $(this);
    if($button.hasClass('on')){     
    
        $button.removeClass('on');
        $button.removeClass('off');
        $button.html('<i class="fa fa-volume-up" </i>');
        
    } else {    
        $button.addClass('on');
        $button.html('<i class="fa fa-volume-off"</i>');
    }
});



// *******************

jQuery(document).ready(function($){
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if( $(this).scrollTop() > offset_opacity ) { 
      $back_to_top.addClass('cd-fade-out');
    }
  });

  //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  });

});


jQuery('#cody-info ul li').eq(1).on('click', function(){
$('#cody-info').hide();
});


// ********************************

jQuery(function() {
    setInterval(function() {
        $(".test").fadeOut(8000);
    })
})