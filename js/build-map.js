import { initCoords } from "./js/initPosition.js";


const {lat, lng} = (await initCoords);
const google_map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lng },
    zoom: 18,
    disableDefaultUI: true,
});


export default google_map;