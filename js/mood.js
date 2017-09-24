window.onload = (function() {
  moodTime();
})();

function moodTime() {
  var now = new Date();
  var hour = now.getHours();
  var current = "Current mood: "
  if(hour == 0){
    document.getElementById('mood').innerHTML = current+"REM Cycle 1";
  }
  else if(hour == 1){
    document.getElementById('mood').innerHTML = current+"REM Cycle 2";
  }
  else if(hour == 2){
    document.getElementById('mood').innerHTML = current+"REM Cycle 3";
  }
  else if(hour == 3){
    document.getElementById('mood').innerHTML = current+"REM Cycle 4";
  }
  else if(hour == 4){
    document.getElementById('mood').innerHTML = current+"Dreaming about chips and guac";
  }
  else if(hour == 5){
    document.getElementById('mood').innerHTML = current+"Dreaming about tacos and salsa";
  }
  else if(hour == 6){
    document.getElementById('mood').innerHTML = current+"Breakfast burrito time";
  }
  else if(hour == 7){
    document.getElementById('mood').innerHTML = current+"Bagel time!";
  }
  else if(hour == 8){
    document.getElementById('mood').innerHTML = current+"Tired, need coffee";
  }
  else if(hour == 9){
    document.getElementById('mood').innerHTML = current+"more coffee";
  }
  else if(hour == 10){
    document.getElementById('mood').innerHTML = current+"pastry and coffee";
  }
  else if(hour == 11){
    document.getElementById('mood').innerHTML = current+"Getting ready for lunch";
  }
  else if(hour == 12){
    document.getElementById('mood').innerHTML = current+"Lunch time";
  }
  else if(hour == 13){
    document.getElementById('mood').innerHTML = current+"Still eating lunch";
  }
  else if(hour == 14){
    document.getElementById('mood').innerHTML = current+"Eating after lunch snacks";
  }
  else if(hour == 15){
    document.getElementById('mood').innerHTML = current+"Need second lunch";
  }
  else if(hour == 16){
    document.getElementById('mood').innerHTML = current+"Tired and hungry";
  }
  else if(hour == 17){
    document.getElementById('mood').innerHTML = current+"Eating late night munchies";
  }
  else if(hour == 18){
    document.getElementById('mood').innerHTML = current+"Eating dinner";
  }
  else if(hour == 19){
    document.getElementById('mood').innerHTML = current+"Ice cream time!";
  }
  else if(hour == 20){
    document.getElementById('mood').innerHTML = current+"Snacks Snacks";
  }
  else if(hour == 21){
    document.getElementById('mood').innerHTML = current+"D e s s e r t !";
  }
  else if(hour == 22){
    document.getElementById('mood').innerHTML = current+"Eating late night munchies";
  }
  else if(hour == 23){
    document.getElementById('mood').innerHTML = current+"Eating second late night munchies";
  }
  else if(hour == 24){
    document.getElementById('mood').innerHTML = current+"Sleep!!!";
  }
  else {
    document.getElementById('mood').innerHTML = current+"Current mood: hungry!";
  }
}
