export class builder {
  constructor(google){
    this.google =  google;
    this.maps = {};
    this.markers = {};
  }
  
  allMap(){
    return this.maps;
  }
  
  mapsCount(){
    return this.maps.lenght();
  }
  
  singleMap(name){
    return this.maps[name];
  }
  
  newMap(name, mapDiv, options){
    if(!mapDiv){
      throw "Need a div";
    }
    const map = this.google.maps.Map(mapDiv, options);
    if(!this.maps[name]) throw "The name all ready exist!";
    this.maps[name] = map; 
  }
  
  newMarker(lat, lng, icon, map_name){
    if(!lat || !lng) throw "Need a position to mark";
    
    if(!map_name){
      if(this.mapsCount() == 0)
    }
    
    return new this.google.maps.Marker({
      position: { lat: lat, lng: lng},
      
    })
    
  }
}
