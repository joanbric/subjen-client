import constants from "./js/constants.js";

const scrypt = document.createElement("script");
scrypt.src = `https://maps.googleapis.com/maps/api/js?key=${constants.API_KEY}&callback=initMap`; //&v=weekly&channel=2
scrypt.async = true;

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}


function calculateAndDisplayRoute(directionsService, directionsRenderer, ) {
  directionsService
    .route({
      origin: { lat: 37.77, lng: -122.447 },
      destination: { lat: 37.768, lng: -122.511 },
      travelMode: google.maps.TravelMode["WALKING"],
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status))


window.initMap = async function() {
  let lat, lng;
  try {
    const position = await getCurrentPosition();
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat, lng: lng },
      zoom: 18,
      disableDefaultUI: true,
    });

    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      icon:
        "https://cdn.glitch.me/fbb65aa9-a4c0-481d-a5ba-b45d15f9e75f%2Fbus.png?v=1634458900680"
    });

    const track = [{ lat: lat, lng: lng }];
    let counter = 0;

    const flightPath = new google.maps.Polyline({
      path: track,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 4
    });

    let watcherID = navigator.geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        marker.setPosition({
          lat: latitude,
          lng: longitude
        });

        track.push({ lat: latitude, lng: longitude });
        flightPath.setPath(track);
        counter++;
      },
      null,
      { enableHighAccuracy: true }
    );

    flightPath.setMap(map);

    console.log("Everything is good");
    
    
    
    
    
    
    
    
  

  directionsRenderer.setMap(map);
    
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  calculateAndDisplayRoute(directionsService, directionsRenderer);


    
    
    
  } catch (err) {
    alert(err.message);
  }
};
document.head.appendChild(scrypt);
