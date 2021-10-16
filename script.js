import constants from "./constants.js";

let map;
let lat, lng;

const scrypt = document.createElement("script");
scrypt.src = `https://maps.googleapis.com/maps/api/js?key=${constants.API_KEY}&callback=initMap`; //&v=weekly&channel=2
scrypt.async = true;
const header1 = document.querySelector('h1');

header1.textContent = "Hola";


function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

window.initMap = async function() {
  try {
    const position = await getCurrentPosition();
    lat = position.coords.latitude;
    lng = position.coords.longitude;

  /*  console.log(lat, lng);
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat, lng: lng },
      zoom: 18
    });

    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map
    });*/
    console.log("Everything is good")
  } catch (err) {
    alert(err.message);
  }
};

document.head.appendChild(scrypt);
