window.onload = (function() {
  moodTime();
})();

function moodTime() {
  var now = new Date();
  var hour = now.getHours();
  if(hour == 12){
    document.getElementById('mood').innerHTML = "Current mood: Snoring";
  }
  if(hour >= 12 + 8){
    document.getElementById('mood').innerHTML = "Current mood: Eating late night munchies";
  }
  else {
    document.getElementById('mood').innerHTML = "Current mood: hungry!";
  }
}
