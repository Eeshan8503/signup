var audio = new Audio('type.mp3');
$("#inputEma").keydown(function(e){
  audio.play();
});
$("#inputEma").keyup(function(e){
  audio.pause();
});
$("#inputEmail").keydown(function(e){
  audio.play();
});
$("#inputEmail").keyup(function(e){
  audio.pause();
});
