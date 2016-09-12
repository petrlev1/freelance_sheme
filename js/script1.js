$('a, #section_apteka, #section_tamasha, #section_gobelen, #section_gipfel, #section_med, #section_azbuka').css( 'cursor', 'pointer' );


// links:

$("#section_tamasha, #item_tamasha").click(function(){
  window.open('http://kostanay.mart.kz/main.php?module=shops&id=68#&panel1-1','_blank');
   });

$("#section_apteka, #item_apteka").click(function(){
  window.open('nolink','_blank');
   });

$("#section_gobelen, #item_gobelen").click(function(){
  window.open('nolink','_blank');
   });

$("#section_gipfel, #item_gipfel").click(function(){
  window.open('http://kostanay.mart.kz/main.php?module=shops&id=72#&panel1-1','_blank');
   });

$("#section_med, #item_med").click(function(){
  window.open('nolink','_blank');
   });

$("#section_azbuka, #item_azbuka").click(function(){
  window.open('nolink','_blank');
   });

// ---




$('#item_tamasha, #section_tamasha').on('mouseover', function(){
    
  $('#section_tamasha').addClass('anim1');
  $('#item_tamasha').addClass('item_act');
    
});

$('#item_tamasha, #section_tamasha').on('mouseout', function(){
    
  $('#section_tamasha').removeClass('anim1');
  $('#item_tamasha').removeClass('item_act');
    
});



$('#item_apteka, #section_apteka').on('mouseover', function(){
    
  $('#section_apteka').addClass('anim1');
  $('#item_apteka').addClass('item_act');
    
});

$('#item_apteka, #section_apteka').on('mouseout', function(){
    
  $('#section_apteka').removeClass('anim1');
  $('#item_apteka').removeClass('item_act');
    
});


$('#item_gobelen, #section_gobelen').on('mouseover', function(){
    
  $('#section_gobelen').addClass('anim1');
  $('#item_gobelen').addClass('item_act');
    
});

$('#item_gobelen, #section_gobelen').on('mouseout', function(){
    
  $('#section_gobelen').removeClass('anim1');
  $('#item_gobelen').removeClass('item_act');
    
});


$('#item_gipfel, #section_gipfel').on('mouseover', function(){
    
  $('#section_gipfel').addClass('anim1');
  $('#item_gipfel').addClass('item_act');
    
});

$('#item_gipfel, #section_gipfel').on('mouseout', function(){
    
  $('#section_gipfel').removeClass('anim1');
  $('#item_gipfel').removeClass('item_act');
    
});


$('#item_med, #section_med').on('mouseover', function(){
    
  $('#section_med').addClass('anim1');
  $('#item_med').addClass('item_act');
    
});

$('#item_med, #section_med').on('mouseout', function(){
    
  $('#section_med').removeClass('anim1');
  $('#item_med').removeClass('item_act');
    
});


$('#item_azbuka, #section_azbuka').on('mouseover', function(){
    
  $('#section_azbuka').addClass('anim1');
  $('#item_azbuka').addClass('item_act');
    
});

$('#item_azbuka, #section_azbuka').on('mouseout', function(){
    
  $('#section_azbuka').removeClass('anim1');
  $('#item_azbuka').removeClass('item_act');
    
});

