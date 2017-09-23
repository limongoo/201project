// js
console.log("start");

// constructor
var portfolio = function(name, background, link) {
  this.name = name;
  this.background = background;
  this.link = link;
}

// array
var portfolioList = [];
portfolioList.push(new portfolio("outt—post", "op4.png", "outtpost.html"));
portfolioList.push(new portfolio("intrinzic", "hive.jpg", "hive.html"));
portfolioList.push(new portfolio("mPowered media", "3dhouse.jpg", "mpowered.html"));
portfolioList.push(new portfolio("m realty", "mrealty-slogan.jpg", "mrealty.html"));
portfolioList.push(new portfolio("chambray", "chambray1.jpg", "chambray.html"));

// make list
function makeList() {
  var build = document.getElementById("projectNames");
  for (index = 0; index < portfolioList.length; index++) {
    var port = portfolioList[index];

    var portList = document.createElement("li");
    portList.setAttribute("id", "projecth1");

    var alink = document.createElement("a");
    alink.href = port.link;
    alink.dataset.backImg = port.background;
    alink.innerText = port.name;

    portList.appendChild(alink);
    alink.addEventListener("mouseover", show); // on mouse over trigger function 'show'
    alink.addEventListener("mouseout", out);
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







window.addEventListener("load", makeList);

console.log("end");
