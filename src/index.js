displayTemp(response) {
    let tempElement = document.querySelector("#temp")
    tempElement.innerHTML = response.data.main.temp;
}


let api = `https://api.openweathermap.org/data/2.5/weather?q=winnipeg&appid=03ea91762285df0d5fb999b760075dea&units=metric`
axios.get(api).then(displayTemp);
