import { globalAxios } from "./global";

export async function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

        function successCallback(value) {
            const { latitude, longitude, accuracy } = value.coords;
            const { timestamp } = value;
            resolve({
                latitude, longitude, accuracy, timestamp
            })
        }
        function errorCallback(e) {
            reject(e);
        }
    })
}

export async function getCurrrentWeather(coords) {
    const response = await globalAxios.get(undefined, {
        params: {
            lat: coords.lat,
            long: coords.long,
        }
    })
}