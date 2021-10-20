class Tracker{
    const track = [];
  constructor(){

    this.paths = [new google.maps.Polyline({
      //path: track,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 4
    })];
    
  }
  
  trackMe(){
    
  }
}