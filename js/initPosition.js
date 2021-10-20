async function initPosition() {
    let lat, lng;

    function getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }
    
    try {
        const position = await getCurrentPosition();
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        
    } catch (err) {
        alert(err.message);
    }

    return { lat: lat, lng: lng };
}


export const initCoords = initPosition();