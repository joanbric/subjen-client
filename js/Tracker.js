class Tracker {
  constructor() {
    this.tracks = {};
    this.paths = {};
  }

  trackMe(id, ) {
    const watcherID_me = navigator.geolocation.watchPosition(
      position => {
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        if (this.tracks[id]) {
          alert("That id already exist.");
        } else {
          this.tracks[id].push(currentPosition);
          flightPath.setPath(track);
          
        }
      },
      null,
      { enableHighAccuracy: true }
    );

    flightPath.setMap(map);
  }

  untrackMe(watcherID) {
    navigator.geolocation.clearWatch(watcherID);
  }

  static newPath(id) {
    this.paths[id] = new google.maps.Polyline({
      //path: track,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 5
    });

    return this.paths[id];
  }
}
