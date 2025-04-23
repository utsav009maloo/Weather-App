const button = document.getElementById('search')
const input = document.getElementById('cityInput')

const Cityname = document.getElementById('cityName')
const CityTemp = document.getElementById('temperature')
const CityTime = document.getElementById('time')
const Weather = document.getElementById('condition')

async function GetData(cityname) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=5e34fcc8b8c640e3b4c54103252304&q=${cityname}&aqi=yes`)
    return await promise.json()

}

button.addEventListener("click", async () => {
    //console.log(input.value);
    const value = input.value
    const result = await GetData(value)
    console.log(result)
    Cityname.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`

    CityTemp.innerText = `${result.current.temp_c}`

    CityTime.innerText = `${result.location.localtime}`

    Weather.innerHTML = `
    ${result.current.condition.text} 
    <img src="https:${result.current.condition.icon}" alt="Weather Icon" style="vertical-align: middle; width: 50px;" />
  `;

})



//http://api.weatherapi.com/v1/current.json?key=5e34fcc8b8c640e3b4c54103252304&q=London&aqi=yes
//alert("hello")