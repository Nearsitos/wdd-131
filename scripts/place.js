function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    } else {
        return "No windchill";
    }
}

let temperature = 15;
let windSpeed = 10;
let windchill = calculateWindChill(temperature, windSpeed);

document.getElementById('windchill').textContent = windchill === "No windchill" ? windchill : windchill.toFixed(2);

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
