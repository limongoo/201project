// js
console.log("start");

var list = function(name, background) {
  this.name = name;
  this.background = background;
}

var portList = [];
portList.push(new list("outtpost", "img/op4.jpg"));
portList.push(new list("outtpost", "img/"));
portList.push(new list("outtpost", "img/"));
portList.push(new list("outtpost", "img/"));





window.addEventListener("load", portfolioBuild);

console.log("end");
