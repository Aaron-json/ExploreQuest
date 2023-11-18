export default function getLocation() {
    let location;
    let error;
    function success(value) {
        return value;
    }
    function error(e) {
        throw new Error(e);
    }
    navigator.geolocation.getCurrentPosition(success, error);
}

export default async function getCurrrentWeather() {
    const location = getLocation();


}