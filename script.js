let searchButton = document.querySelector("#search")
let clickCount = 0
searchButton.addEventListener("click", () => {
    console.log("button pressed")  
   
    sendApiRequest(clickCount)
    clickCount++

})

async function sendApiRequest(clickCount) {
    const APIKEY = "Kxxlkd2hUzVR8tw66hpQWLNdXHG8WAVaE7iZaemg"
    let response = await (await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${APIKEY}`)).json();
    console.log(response)
    useApiData(response,clickCount)
    // console.log(clickCount)
}

function parseCamera(camera) {
    return `${camera.id}`;
}

async function useApiData(response,clickCount) {
    document.querySelector("#content").innerHTML += `<img src=${response.photos[clickCount].img_src}>`
    document.querySelector("#content").innerHTML += `<span>${response.photos[clickCount].id}</>`
    document.querySelector("#content").innerHTML += `<p>${response.photos[clickCount].sol}</>`
    document.querySelector("#content").innerHTML += `<p>${parseCamera(response.photos[clickCount].camera)}</>`
}