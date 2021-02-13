var audio = new Audio('type.mp3');
$("input").keydown(function(e){
  audio.play();
});
$("input").keyup(function(e){
  audio.pause();
});
