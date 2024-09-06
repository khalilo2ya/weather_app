const apiKey = 'e35c70cd0128e54ef70331a11eec5df9'; // Replace with your OpenWeatherMap API key

document.getElementById('city').addEventListener('input', function() {
    const query = this.value;
    if (query.length > 2) {
        getCitySuggestions(query);
    }
});

function getCitySuggestions(query) {
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCitySuggestions(data);
        })
        .catch(error => {
            console.log("Error fetching city suggestions: ", error);
        });
}

function displayCitySuggestions(suggestions) {
    const suggestionBox = document.getElementById('citySuggestions');
    suggestionBox.innerHTML = '';

    suggestions.forEach(suggestion => {
        const city = suggestion.name;
        const country = suggestion.country;
        const item = document.createElement('div');
        item.className = 'suggestion';
        item.innerText = `${city}, ${country}`;
        item.onclick = function() {
            document.getElementById('city').value = `${city}, ${country}`;
            suggestionBox.innerHTML = ''; // Clear suggestions after selection
        };
        suggestionBox.appendChild(item);
    });
}

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert("City not found.");
            }
        })
        .catch(error => {
            console.log("Error fetching weather data: ", error);
        });
}

function displayWeather(data) {
    const weatherDetails = document.getElementById('weatherDetails');
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    weatherDetails.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${icon}" alt="Weather Icon">
        <p>${temp}°C</p>
        <p>${weather}</p>
    `;
}
