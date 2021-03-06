// form js

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

  var formResult = {name,last,email,project};
  localStorage.setItem('userData', JSON.stringify(formResult));
  // document.getElementById('showInput').innerHTML = formResult;
  var show = document.getElementById('showInput');
  var thanks = document.createElement('h1');
  var message = document.createTextNode("Thank you "+name+", your request is received!");
  thanks.appendChild(message);
  show.appendChild(thanks);
}

var formResult = null;

// form display none onclick
submitButton.addEventListener('click', contactNone);
function contactNone() {
  var xForm = document.getElementById('userForm').style.display = "none";
}



// Local Storage for user name
var userRetrieve = localStorage.getItem('userData');
if (userRetrieve != null) {
  formResult = JSON.parse(userRetrieve);
};

// display user input
if (formResult == null){
  var dontDisplay = document.getElementById('displayUserName').style.display = "none";
}
else {
  var display = document.getElementById('displayUserName');
  var displayCreate = document.createElement('p');
  var displayMessage = document.createTextNode('Welcome back '+formResult.name+" — your request was already submitted. Feel free to request for another project below. Thanks!")
  displayCreate.appendChild(displayMessage);
  display.appendChild(displayCreate);
}

console.log('submitDiv')

// close welcome back message on form submit click
submitButton.addEventListener('click', welcomeMessage);
function welcomeMessage() {
  var xMessage = document.getElementById('displayUserName').style.display = "none";
}


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
