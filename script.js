import scrypt from "./js/script-apimap.js";
import buildMap from "./js/build-map.js";
import MarkerManager from "./js/MarkerManager.js";
import Tracker from "./js/Tracker.js";

let idTrackWatcher;
const btnTrack = document.querySelector("#btnTrack");

window.initMap = async function () {
    try {
        const map = await buildMap();
        const markerManager = new MarkerManager(map);
        const me = markerManager.me;

        const watcherID_me = navigator.geolocation.watchPosition(
            (position) => {
                const currentPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                me.setPosition(currentPosition);
                //map.setCenter(currentPosition);
            },
            null,
            { enableHighAccuracy: true }
        );

        const tracker = new Tracker(map);

        btnTrack.addEventListener("click", () => {
            if (btnTrack.textContent == "Track") {
                idTrackWatcher = tracker.trackMe(prompt("Nombre"));
                btnTrack.textContent = "Untrack";
            } else {
                tracker.untrackMe(idTrackWatcher);
                btnTrack.textContent = "Track";
            }
        });
    } catch (err) {
        alert(err.message);
    }
};

document.head.appendChild(scrypt);

function loadServiceWorker() {
    if (!("serviceWorker" in navigator))
        throw new Error(`Your browser doesn't support ServiceWorker`);

    window.addEventListener("load", async () => {
        try {
            const regist = await navigator.serviceWorker.register("./sw.js");
            console.log("ServiceWorker registred successful with scope: ", (await regist).scope)
        } catch (err) {
            console.error(err);
        }
    });
}

loadServiceWorker()
