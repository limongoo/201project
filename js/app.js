// js
console.log("start");

// constructor
var portfolio = function(name, background) {
  this.name = name;
  this.background = background;
}

// array
var portfolioList = [];
portfolioList.push(new portfolio("outtpost", "op4.png"));
portfolioList.push(new portfolio("intrinzic", "hive.jpg"));
portfolioList.push(new portfolio("mpowered media", "3dhouse.jpg"));
portfolioList.push(new portfolio("m realty", "mrealty-slogan.jpg"));

// make list
function makeList() {
  var build = document.getElementById("projectNames");
  for (index = 0; index < portfolioList.length; index++) {
    var port = portfolioList[index];
    var portList = document.createElement("li");
    portList.dataset.backImg = port.background;
    portList.innerText = port.name;
    portList.addEventListener("mouseover", show); // on mouse over trigger function 'show'
    build.appendChild(portList);
  }
}

// show function
function show(event) {
  var hover = event.target;
  var back = document.getElementById("showBackground");
  back.innerHTML = "";
  var image = document.createElement("img");
  image.src = "img/" + hover.dataset.backImg
  back.appendChild(image);
}


window.addEventListener("load", makeList);

console.log("end");
