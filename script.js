const apiKey = 'YOUR_API_KEY';  // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

// Function to fetch weather data
async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

// Function to display weather data on the page
function displayWeather(data) {
  locationElement.textContent = `${data.name}, ${data.sys.country}`;
  temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
  descriptionElement.textContent = `Description: ${data.weather[0].description}`;
}

// Event listener for the search button
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name');
  }
});

// Optional: Fetch weather for a default city when the page loads
fetchWeather('London');
