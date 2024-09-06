
# Weather App

A simple weather application that allows users to search for the weather of a city, with autocomplete functionality for city names using OpenWeatherMap's Geocoding API.

## Features

- Autocomplete city suggestions as you type.
- Fetch current weather information for the selected city.
- Display weather details including temperature, description, and weather icon.

## Technologies Used

- **HTML**: For the structure of the application.
- **CSS**: For styling the user interface.
- **JavaScript**: For handling API calls and user interactions.
- **OpenWeatherMap API**: Used to get weather data and city suggestions.

## How to Use

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```
2. **Open `index.html` in Your Browser**:
   After cloning the repository, navigate to the project directory and open the `index.html` file in your browser.

3. **Enter a City Name**:
   Type the name of a city in the search box. As you type, city suggestions will appear.

4. **Select a City**:
   Click on one of the city suggestions to fill the search box, then click the **Get Weather** button to fetch the weather details.

## API Setup

This app uses the OpenWeatherMap API for weather data and geolocation. You'll need to sign up for an API key on the [OpenWeatherMap website](https://openweathermap.org/).

### Steps to Get Your OpenWeatherMap API Key:
1. Create an account at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
2. Go to the API Keys section and generate a new API key.
3. Replace the placeholder API key in `script.js` with your actual API key:
   ```javascript
   const apiKey = 'your_openweathermap_api_key';
   ```

## Folder Structure

```
├── index.html          # The main HTML file
├── style.css           # The stylesheet for the app
└── script.js           # The main JavaScript file
```

## Dependencies

- [OpenWeatherMap API](https://openweathermap.org/)
- No additional external libraries are required.

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software.

## Future Enhancements

- Add hourly and weekly weather forecast.
- Add more detailed weather information like wind speed and humidity.
- Improve UI and UX with additional styles and animations.
```

### Notes:
- Replace `your-username` with your actual GitHub username in the clone link.
- Don't forget to replace `your_openweathermap_api_key` in the instructions with your real API key.
