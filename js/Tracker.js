class Tracker {
  constructor(map) {
    this.tracks = {};
    this.paths = {};
    this.map = map;
  }

  trackMe(id) {
    let watcherID_me;
    try{
      
    if (this.tracks[id]) {
      alert("That id already exist.");
    } else {
      const path = this.newPath(id);
      this.tracks[id] = [];

      watcherID_me = navigator.geolocation.watchPosition(
        position => {
          const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          this.tracks[id].push(currentPosition);
          path.setPath(this.tracks[id]);
        },
        null,
        { enableHighAccuracy: true }
      );

      path.setMap(this.map);
    }
    }catch(err){
      alert(err.message)
    }
    return watcherID_me;
  }

  untrackMe(watcherID) {
    navigator.geolocation.clearWatch(watcherID);
  }

  newPath(id) {
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

export default Tracker;