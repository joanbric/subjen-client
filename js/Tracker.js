class Tracker{
  
  constructor(){
    this.tracks = {};
    this.paths = [new google.maps.Polyline({
      //path: track,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 5
    })];
    
  }
  
  trackMe(){
     const watcherID_me = navigator.geolocation.watchPosition(
      position => {
        const currentPosition = { "lat": position.coords.latitude, "lng": position.coords.longitude };
        
        me.setPosition(currentPosition);
        map.setCenter(currentPosition);
        track.push(currentPosition);
        flightPath.setPath(track);
      },
      null,
      { enableHighAccuracy: true }
    );

    flightPath.setMap(map);
  }
  
  untrackMe(watcherID){
    navigator.geolocation.clearWatch(watcherID);
  }
  
  static
}