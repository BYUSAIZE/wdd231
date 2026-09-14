// ============================================
// weather.js — current conditions + 3-day forecast
// via OpenWeatherMap for Harare, Zimbabwe
// ============================================

const apiKey = "68c72cb3470501cc0240cdedc6a23d14";
const lat = -17.8292;
const lon = 31.0522;

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getCurrentWeather() {
    try {
        const response = await fetch(currentUrl);
        const data = await response.json();
        displayCurrentWeather(data);
    } catch (error) {
        console.error('Error loading current weather:', error);
        document.getElementById('current-condition').textContent = 'Weather unavailable right now.';
    }
}

function displayCurrentWeather(data) {
    document.getElementById('current-temp').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('current-condition').textContent = data.weather[0].description;
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        const data = await response.json();
        displayForecast(data.list);
    } catch (error) {
        console.error('Error loading forecast:', error);
        document.getElementById('forecast-container').innerHTML =
            '<p>Forecast unavailable right now.</p>';
    }
}

// The 5-day/3-hour endpoint returns 3-hour steps; pick the entry
// closest to noon for each of the next 3 days.
function displayForecast(list) {
    const container = document.getElementById('forecast-container');
    container.innerHTML = '';

    const noonEntries = list.filter((entry) => entry.dt_txt.includes('12:00:00')).slice(0, 3);

    noonEntries.forEach((entry) => {
        const day = new Date(entry.dt_txt).toLocaleDateString('en-US', { weekday: 'short' });
        const temp = Math.round(entry.main.temp);

        const card = document.createElement('div');
        card.classList.add('forecast-day');
        card.innerHTML = `
            <p class="forecast-label">${day}</p>
            <p class="forecast-temp">${temp}°C</p>
        `;
        container.appendChild(card);
    });
}

getCurrentWeather();
getForecast();