// js
console.log("start");

// constructor
var portfolio = function(name, background) {
  this.name = name;
  this.background = background;
}

// array
var portfolioList = [];
portfolioList.push(new portfolio("outt—post", "op4.png"));
portfolioList.push(new portfolio("intrinzic", "hive.jpg"));
// portfolioList.push(new portfolio("chambray", ."jpg"));
portfolioList.push(new portfolio("mPowered media", "3dhouse.jpg"));
portfolioList.push(new portfolio("m realty", "mrealty-slogan.jpg"));

// make list
function makeList() {
  var build = document.getElementById("projectNames");
  for (index = 0; index < portfolioList.length; index++) {
    var port = portfolioList[index];
    var portList = document.createElement("li");
    portList.setAttribute("id", "projecth1");
    portList.dataset.backImg = port.background;
    portList.innerText = port.name;
    portList.addEventListener("mouseover", show); // on mouse over trigger function 'show'
    portList.addEventListener("mouseout", out);
    build.appendChild(portList);
  }
}

// show background function
function show(event) {
  var hover = event.target;
  var back = document.getElementById("showBackground");
  back.innerHTML = "";
  var image = document.createElement("img");
  image.src = "img/" + hover.dataset.backImg
  back.appendChild(image);
}

// out background function
function out() {
  var back = document.getElementById("showBackground");
  back.innerHTML = "";
}

// form input
var submitButton = document.getElementById('submitDiv');
submitButton.addEventListener('click', contactForm);

// function to capture user input
function contactForm(event) {
  event.preventDefault(); // prevent form from reloading window
  var name = document.getElementById('formName').value;
  var last = document.getElementById('formLast').value;
  var email = document.getElementById('formEmail').value;
  var project = document.getElementById('formProject').value;

  var formResult = name+last+email+project;
  localStorage.setItem('userData', JSON.stringify(formResult));
  document.getElementById('showInput').innerHTML = formResult;
}

// Local Storage for user name
var userRetrieve = localStorage.getItem('userData');
if (userRetrieve != null) {
  formResult = JSON.parse(userRetrieve);
};

// display user input
if (
  document.getElementById('displayUserName') != null) {
  document.getElementById('displayUserName').innerHTML = formResult;
}

console.log('submitDiv')


// open contact modal
var contactShow = document.getElementById('contactmodal');
contactShow.addEventListener('click', triggerContactModal);

function triggerContactModal() {
  var addContact = document.getElementsByClassName('modal')[0];
  addContact.setAttribute('class', 'modal active');
}

// close contact modal
var closeContact = document.getElementById('close');
closeContact.addEventListener('click', closeContactModal);

function closeContactModal() {
  var xContact = document.getElementsByClassName('modal active')[0];
  xContact.setAttribute('class', 'modal');
}


window.addEventListener("load", makeList);

console.log("end");
