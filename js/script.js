function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(52.237049, 21.017532),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
var scroll = new SmoothScroll('a[href*="#"]');
window.addEventListener('scroll', trans);
function trans() {
  if (window.scrollY > 100){
    document.querySelector('nav').classList.add("nav__fixed")}
if (window.scrollY < 100) {
  document.querySelector('nav').classList.remove("nav__fixed")}
}

function menu() {
  var x = document.querySelector('ul.nav__list');
  if( x.style.display === "none") {
    x.style.display = "block"
  } else {
    x.style.display = "none"
  }
  event.stopPropagation();
}
function delMenu() {
  document.querySelector('ul.nav__list').style.display = "none";
}
document.querySelector('body').addEventListener("click", delMenu);
