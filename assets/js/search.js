////7///////////////////////////////////////////////////////////////////////
// city_state.js ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

var countries = Object();

countries['ภูเขา'] = 'ดอยอินทนนท์|ดอยฟ้าห่มปก|ดอยหลวงเชียงดาว|ยอดเขาโมโกจู|ดอยภูแว|ยอดเขาหลวง|ดอยเวียงผา|ภูแผงม้า|ดอยมด|ภูสอยดาว';
countries['น้ำตก'] = 'น้ำตกห้วยแม่ขมิ้น|น้ำตกทีลอซู|น้ำตกทีลอซู|ยอดเขาโมโกจู|น้ำตกเอราวัณ|น้ำตกคลองลาน|น้ำตกขุนพอง|น้ำตกเหวนรก|น้ำตกเขาสอยดาว';
countries['ทะเล'] = 'หาดพระนาง|อ่าวมาหยา|หาดทรายขาว|อ่าวประมง|หาดป่าตอง|เกาะนางยวน|หัวหิน|หาดละไม|หาดริ้น|หาดทรายรี';


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

html = "";
for (region in countries)
  html += '<option value="' + region + '">' + region + '</option>';

document.getElementById("region").innerHTML = document.getElementById("region").innerHTML + html;

function set_country(oRegionSel, oCountrySel, oCity_StateSel) {
  var countryArr;
  oCountrySel.length = 0;
  oCity_StateSel.length = 0;
  var region = oRegionSel.options[oRegionSel.selectedIndex].text;
  if (countries[region]) {
    oCountrySel.disabled = false;
    oCity_StateSel.disabled = true;
    oCountrySel.options[0] = new Option('เลือกสถานที่', '');
    countryArr = countries[region].split('|');
    for (var i = 0; i < countryArr.length; i++)
      oCountrySel.options[i + 1] = new Option(countryArr[i], countryArr[i]);
    document.getElementById('txtregion').innerHTML = region;
    document.getElementById('txtplacename').innerHTML = '';
  } else oCountrySel.disabled = true;
}

function set_city_state(oCountrySel, oCity_StateSel) {
  var city_stateArr;
  oCity_StateSel.length = 0;
  var country = oCountrySel.options[oCountrySel.selectedIndex].text;
  if (city_states[country]) {
    oCity_StateSel.disabled = false;
    oCity_StateSel.options[0] = new Option('SELECT NEAREST DIVISION', '');
    city_stateArr = city_states[country].split('|');
    for (var i = 0; i < city_stateArr.length; i++)
      oCity_StateSel.options[i + 1] = new Option(city_stateArr[i], city_stateArr[i]);
 
  } else oCity_StateSel.disabled = true;
}

function print_city_state(oCountrySel, oCity_StateSel) {
  var country = oCountrySel.options[oCountrySel.selectedIndex].text;
  // var city_state = oCity_StateSel.options[oCity_StateSel.selectedIndex].text;

}

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