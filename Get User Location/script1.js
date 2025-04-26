const button = document.getElementById('location-button');
const Cityname = document.getElementById('cityName');
const CityTemp = document.getElementById('temperature');
const CityTime = document.getElementById('time');
const Weather = document.getElementById('condition');

async function GetData(lat, long) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=5e34fcc8b8c640e3b4c54103252304&q=${lat},${long}&aqi=yes`);
        if (!response.ok) throw new Error("Weather API error");
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
        return null;
    }
}

async function getlocation(position) {
    const result = await GetData(position.coords.latitude, position.coords.longitude);
    if (!result) {
        Cityname.innerText = "Unable to fetch weather data";
        CityTemp.innerText = "--°C";
        CityTime.innerText = "Time";
        Weather.innerHTML = "Weather Condition";
        return;
    }
    Cityname.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    CityTemp.innerText = `${result.current.temp_c}°C`;
    CityTime.innerText = `${result.location.localtime}`;
    Weather.innerHTML = `
        ${result.current.condition.text} 
        <img src="https:${result.current.condition.icon}" alt="Weather Icon" style="vertical-align: middle; width: 50px;" />
    `;
}

function failed() {
    Cityname.innerText = "Location access denied";
    CityTemp.innerText = "--°C";
    CityTime.innerText = "Time";
    Weather.innerHTML = "Weather Condition";
}

button.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getlocation, failed);
    } else {
        failed();
    }
});
