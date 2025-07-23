function showweatherDetails(event) {
    event.preventDefault();
    
    const lat = document.getElementById('lat').value.trim();
    const lon = document.getElementById('lon').value.trim();
    const apiKey = '84c145680cd032db2877a6df1885f2f3';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = document.getElementById('weatherInfo');
                weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                        <p>Temprature: ${data.main.temp} &#8451;</p>
                                        <p>Weather: ${data.weather[0].description}</p>`;
            })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );