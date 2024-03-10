// Define a function to fetch weather data for a given city
function getWeather(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9d8617ec99mshd13660053f6bb99p1a2849jsn48f8ce208dad',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(url, options)
    .then(response => response.json())
    .then(response => {
        console.log(response); 
		setcity.innerHTML = city
	temp.innerHTML = response.temp
	temp1.innerHTML = response.temp
	humidity.innerHTML=response.humidity
	humidity4.innerHTML=response.humidity
	mintemp.innerHTML = response.min_temp
	maxtemp.innerHTML = response.max_temp
	windspeed.innerHTML = response.wind_speed
	wind_degrees.innerHTML=response.wind_degrees
	feels_like.innerHTML = response.feels_like
	cloud_pct.innerHTML = response.cloud_pct
	sunrise.innerHTML=response.sunrise
	sunset.innerHTML=response.sunset
    })
    .catch(err => {
        console.error(err); 
    });
}

getWeather("Delhi")


const button = document.getElementById('myButton');

button.addEventListener('click', function() {
    const inputText = document.getElementById('textInput').value;
    getWeather(inputText);
});
