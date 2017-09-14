// js
console.log("start");

var portfolio = function(name, background) {
  this.name = name;
  this.background = background;
}

var portfolioList = [];
portfolioList.push(new portfolio("outtpost", "img/op4.jpg"));
portfolioList.push(new portfolio("intrinzic", "img/hive.jpg"));
// portfolioList.push(new portfolio("mpowered media", "img/"));
// portfolioList.push(new portfolio("outtpost", "img/"));


function makeList() {
  var build = document.getElementById("projectNames");
  for (index = 0; index < portfolioList.length; index++) {
    var port = portfolioList[index];
    var portList = document.createElement("li");
    portList.innerText = port.name;
    portList.addEventListener("click", show);
    portList.dataset.index = index;
    build.appendChild(portList);
  }
}

function show(event) {
  var click = event.target;
}


window.addEventListener("load", makeList);

console.log("end");
