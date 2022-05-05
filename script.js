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
    console.log(clickCount)
}

async function useApiData(response,clickCount) {
    // document.querySelector("#content").innerHTML += data.explanation
    // document.querySelector("#content").innerHTML += '<img src="${data.url}">'
    document.querySelector("#content").innerHTML += `<img src=${response.photos[clickCount].img_src}>`

}