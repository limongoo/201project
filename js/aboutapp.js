// page transition
var link = document.getElementById('aab');
link.addEventListener('click', function (event) {
  event.preventDefault();
  document.body.classList.remove("fadein");
  document.body.classList.add("fadeout");
  setTimeout(function(){
    location.assign(event.target.href);
  },500);
})

var link = document.getElementById('bbc');
link.addEventListener('click', function (event) {
  event.preventDefault();
  document.body.classList.remove("fadein");
  document.body.classList.add("fadeout");
  setTimeout(function(){
    location.assign(event.target.href);
  },500);
})
