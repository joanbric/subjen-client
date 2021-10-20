import scrypt from "./js/script-apimap.js"
import buildMap from "./js/build-map.js";
import MarkerManager from "./js/MarkerManager.js"



window.initMap = async function() {
  let lat, lng;
  try {
  

    const map = await buildMap();
    const markerManager = new MarkerManager(map);
    const me = markerManager.me;

    const track = [me.getPosition()];
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
        const currentPosition = { lat: position.latitude, lng: position.longitude };
        
        me.setPosition(currentPosition);
        //map.setCenter(currentPosition);
        track.push(currentPosition);
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