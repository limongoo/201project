// page transition
var link = document.getElementById('aaa');
link.addEventListener('click', function (event) {
  event.preventDefault();
  document.body.classList.remove("fadein");
  document.body.classList.add("fadeout");
  setTimeout(function(){
    location.assign(event.target.href);
  },400);
})

var link = document.getElementById('bbb');
link.addEventListener('click', function (event) {
  event.preventDefault();
  document.body.classList.remove("fadein");
  document.body.classList.add("fadeout");
  setTimeout(function(){
    location.assign(event.target.href);
  },400);
})
