import constants from "./constants.js";

const scrypt = document.createElement("script");
scrypt.src = `https://maps.googleapis.com/maps/api/js?key=${constants.API_KEY}&callback=initMap`; //&v=weekly&channel=2
scrypt.async = true;

function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

window.initMap = async function() {
  let lat, lng;
  try {
    const position = await getCurrentPosition();
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat, lng: lng },
      zoom: 18
    });

    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      icon: 'https://cdn.glitch.me/fbb65aa9-a4c0-481d-a5ba-b45d15f9e75f%2Fbus.png?v=1634458900680'
    });

    const track = {};
    let counter = 0;
    let watcherID = navigator.geolocation.watchPosition(position => {
      const {latitude, longitude} = position.coords;
      marker.setPosition({
        lat: latitude,
        lng: longitude
      });
      
      track[counter] = {latitude, longitude};
      counter++;
    });

    console.log("Everything is good");
  } catch (err) {
    alert(err.message);
  }
};

document.head.appendChild(scrypt);
