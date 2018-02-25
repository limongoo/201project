// js
console.log("start");

// constructor
var portfolio = function(name, background, link, title) {
  this.name = name;
  this.background = background;
  this.link = link;
  this.title = title;
}

// array
var portfolioList = [];
portfolioList.push(new portfolio("mPowered media", "3dhouse.jpg", "mpowered.html", "— design + web + branding"));
portfolioList.push(new portfolio("m realty", "mrealty-slogan.jpg", "mrealty.html", "— design + branding"));
portfolioList.push(new portfolio("outt—post", "op4.png", "outtpost.html", "— design + concept"));
portfolioList.push(new portfolio("intrinzic", "hive.jpg", "hive.html", "— design"));
portfolioList.push(new portfolio("chambray studios", "chambray1.jpg", "chambray.html", "— photography + design"));

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

    alink.dataset.upTitle = port.title;

    portList.appendChild(alink);
    alink.addEventListener("mouseover", show); // on mouse over trigger function 'show'
    alink.addEventListener("mouseout", out);
    alink.addEventListener("mouseover", showTitle); // on mouse over trigger function 'show'
    alink.addEventListener("mouseout", outTitle);
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

// show title function
function showTitle(event) {
  var hoverTitle = event.target;
  var hoverID = document.getElementById('pTitle');
  hoverID.innerHTML = "";
  var getTitle = document.createTextNode(hoverTitle.dataset.upTitle);
  hoverID.appendChild(getTitle);
}

// out title function
function outTitle() {
  var titleOut = document.getElementById('pTitle');
  titleOut.innerHTML = "";
}

window.addEventListener("load", makeList);
console.log("end");
