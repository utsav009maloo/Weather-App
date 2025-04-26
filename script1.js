const button = document.getElementById('location-button')

function getlocation(position){
    console.log(position)
}

function failed(){
    console.log("There is an issue")
}

button.addEventListener('click' , async () => {
    const result = navigator.geolocation.getCurrentPosition(getlocation,failed)
})