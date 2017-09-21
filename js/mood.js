window.onload = (function() {
  moodTime();
})();

function moodTime() {
  var now = new Date();
  var hour = now.getHours();
  if(hour == 1){
    document.getElementById('mood').innerHTML = "Current mood: Snoring";
  }
  else {
    document.getElementById('mood').innerHTML = "Current mood: hungry!";
  }
}
