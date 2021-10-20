import { scrypt } from "./js/script-apimap.js";
import {google_map} from "./js/build-map.js"
import { MarkerManager } from "./js/MarkerManager.js";

window.initMap = async function() {
  try {
      
      let counter = 0;
      const track = [{ lat: lat, lng: lng }];
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