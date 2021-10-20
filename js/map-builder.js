export const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 18
});

const marker = new google.maps.Marker({
  map: map,
  icon:
    "https://cdn.glitch.me/fbb65aa9-a4c0-481d-a5ba-b45d15f9e75f%2Fbus.png?v=1634458900680"
});
