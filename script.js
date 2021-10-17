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
      map: map
    });

    let watcherID = navigator.geolocation.watchPosition(position => {
      marker.setPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    });

    console.log("Everything is good");
  } catch (err) {
    alert(err.message);
  }
};

document.head.appendChild(scrypt);
