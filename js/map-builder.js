export class builder {
  constructor(google){
    this.google =  google;
    this.maps = {};
  }
  
  allMap(){
    return this.maps;
  }
  
  singleMap(name){
    return this.maps[name];
  }
  
  newMap(name, mapDiv, options){
    if(mapDiv){
      throw "Need a div";
    }
    const map = this.google.maps.Map(mapDiv, options);
    if(this.maps[name]) throw "The name all ready exist!";
    this.maps[name] = map; 
  }
}
