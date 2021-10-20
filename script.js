import { scrypt } from "./js/script-apimap.js";
import {builtMap} from "./js/build-map.js";
import { MarkerManager } from "./js/MarkerManager.js";

window.initMap = async function() {
  try {
    
    const google_map = await builtMap();
      
      let counter = 0;
      const track = [google_map.getCenter()];
    const markerManager = MarkerManager();


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
        
        markerManager.me.setPosition({
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

    flightPath.setMap(google_map);

    console.log("Everything is good");
  


  } catch (err) {
    alert(err.message);
  }
};


  document.head.appendChild(scrypt);