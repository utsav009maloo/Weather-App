const button = document.getElementById('location-button')


async function GetData(lat, long) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=5e34fcc8b8c640e3b4c54103252304&q=${lat},${long}&aqi=yes`)
    return await promise.json()

}

async function getlocation(position){
    // console.log(position)
    const result = await GetData(position.coords.latitude,position.coords.longitude)
    console.log(result)
}

function failed(){
    console.log("There is an issue")
}

button.addEventListener('click' , async () => {
    const result = navigator.geolocation.getCurrentPosition(getlocation,failed)
})

