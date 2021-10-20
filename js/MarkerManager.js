import buildMap from "./build-map";

export class MarkerManager{
    constructor(position, map, icon){
        let values = {"position": position, "map": map, "icon" : icon};

        if(!map) values.map = google_map;
        if(!position) values.position = google_map.getCenter();
        if(!icon) values.icon = "https://cdn.glitch.me/fbb65aa9-a4c0-481d-a5ba-b45d15f9e75f%2Fbus.png?v=1634458900680"




        this.me = new google.maps.Marker(values)
    }

    get me(){
        return this.me;
    }
}