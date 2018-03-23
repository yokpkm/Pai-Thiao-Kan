 
// if(document.querySelector('[data-swipe-menu="left"]')) {
//   document.addEventListener('swipeRight', function(e){
//     var swipeableArea = e.detail.type == "touch" ? ( (winW()*0.25 > 150) ? winW()*0.25 : 150 ) : 100;
//     if(e.detail.start <= swipeableArea) {
//       openMenu();
//     }
//   }, false)

//   document.addEventListener('swipeLeft', function(e){
//       if(!e.target.isSameNode(document.querySelector('[data-swipe-menu="left"]'))) {
//         closeMenu();
//       }
//   }, false);
  
//   document.querySelector('[data-swipe-menu="button"]').addEventListener('click', function(){
//     document.querySelector('html').classList.toggle('menu-is-open');
//   });
//   document.querySelector('[data-swipe-menu="button"]').addEventListener('touchend', function(){
//     document.querySelector('html').classList.toggle('menu-is-open');
//   });
// }



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

    //   if (!active4) $(this).find('.test4').css({'background-color': 
    //     'gray', 'transform': 'translate(125px,0px)'});

    // else $(this).find('.test4').css({'background-color': 
    //   'silver',   'transform': 'none'});
    active1 = !active1;
    active2 = !active2;
    active3 = !active3;
    active4 = !active4;
      
    });
});

// *************************************************
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


// ********menufade*******************

  // $(function () {
  //   var popup = $("#popup-container");
  //   $("btn").on('click', function () {
  //     popup.toggleClass('visible');
  //   });
  // })


  // *****************************************

$(document).ready(function(e) {
      $("#img2").fadeOut();
      $("#div2").fadeIn();
        $("#img1").on('click', function() {
       $("#div1").fadeIn();
       $("#div2").fadeOut();
       $("#img1").fadeOut();
       $("#img2").fadeIn();
    });

    $("#img2").on('click', function() {
       $("#div1").fadeOut();
       $("#div2").fadeIn();
       $("#img2").fadeOut();
       $("#img1").fadeIn();
    });
    });


