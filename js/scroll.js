// scroll reveal - Scroll Reveal from https://scrollrevealjs.org/
function addImgClass () {
  var pi = document.getElementById('projectContain');
  var pimg = document.getElementsByTagName('IMG')
    for (i=0; i <pimg.length; i++) {
      pimg[i].setAttribute('class', 'sr');
    }
}
addImgClass();

window.sr = ScrollReveal({
  origin: 'bottom',
  duration: 1000,
  delay: 1,
  opacity: 0,
  useDelay: 'always',
  reset: false,
});
var revealContainer = document.getElementById('projectContain');
sr.reveal('.sr', {container: projectContain});
