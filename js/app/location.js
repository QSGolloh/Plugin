// function getlatitude(){
// var latititude = position.coords.latitude;
// }

// function getlongitude(){
// 	 var longitude = position.coords.longitude;
// }

$(function(){
	$(window).load(function(){
		initMap();
	});
});

function initMap() {
	var directionService = new google.maps.DirectionsService;
	var directionDisplay = new google.maps.DirectionsRenderer;

	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
	directionDisplay.setMap(map);
}


function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getCurrentlocation);
	} else { 
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

// function defaultlocation(){
// 	var pos = {lat: -25.363, lng: 131.044};
//           var map = new google.maps.Map(document.getElementById('map'), {
//             zoom: 4,
//             center: ulur
//           });
//           var marker = new google.maps.Marker({
//             position: pos,
//             map: map
//           });
// }

function getCurrentlocation(position){
	var latititude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var uluru = {lat: latititude, lng: longitude};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});

}
