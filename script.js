import scrypt from "./js/script-apimap.js"
import buildMap from "./js/build-map.js";
import MarkerManager from "./js/MarkerManager.js"
import Tracker from "./js/Tracker.js"
let idTrackWatcher;
const btnTrack = document.querySelector('#btnTrack');

window.initMap = async function() {
  try {
    const map = await buildMap();
    const markerManager = new MarkerManager(map);
    const me = markerManager.me;
/*
    const track = [me.getPosition()];

    const flightPath = new google.maps.Polyline({
      path: track,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 4
    });
*/
    const watcherID_me = navigator.geolocation.watchPosition(
      position => {
        const currentPosition = { "lat": position.coords.latitude, "lng": position.coords.longitude };
        
        me.setPosition(currentPosition);
        map.setCenter(currentPosition);
       /* track.push(currentPosition);
        flightPath.setPath(track);*/
      },
      null,
      { enableHighAccuracy: true }
    );

   // flightPath.setMap(map);
    
    
    const tracker = new Tracker(map);
    
    btnTrack.addEventListener('click', ()=>{
      if(btnTrack.textContent == "Track"){
       idTrackWatcher = tracker.trackMe(prompt('Nombre'));
      btnTrack.textContent = 'Untrack';
      }else{
        tracker.untrackMe(idTrackWatcher);
        btnTrack.textContent = 'Track';
      }
      
      
    });

    
  } catch (err) {
    alert(err.message);
  }
};


  document.head.appendChild(scrypt);