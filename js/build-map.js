import initPosition from "./initPosition.js";

async function builtMap() {
  try{
    
  const { lat, lng } = await initPosition();
  const google_map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: lng },
    zoom: 18,
    disableDefaultUI: true
  });    
    return google_map;
  }catch(err){
    alert(err.message)
  }
}

export default builtMap;
