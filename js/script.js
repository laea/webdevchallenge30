function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(52.237049, 21.017532),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
