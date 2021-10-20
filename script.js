import scrypt from "./js/script-apimap.js"
import buildMap from "./js/build-map.js";
import MarkerManager from "./js/MarkerManager.js"

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}


window.initMap = async function() {
  let lat, lng;
  try {
    const position = await getCurrentPosition();
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    const map = await buildMap();
    const markerManager = MarkerManager();
    const me = markerManager.me;

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
        me.setPosition({
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
  


  } catch (err) {
    alert(err.message);
  }
};


  document.head.appendChild(scrypt);