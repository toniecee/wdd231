const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const forecast1 = document.querySelector('#forecast-1');
const forecast2 = document.querySelector('#forecast-2');
const forecast3 = document.querySelector('#forecast-3');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=6.339&lon=5.617&units=metric&appid=d00d88e180d048b6d96859b13800dcfd';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=6.339&lon=5.617&units=metric&appid=d00d88e180d048b6d96859b13800dcfd';

async function apiFetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayCurrentWeather(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayCurrentWeather(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const desc = data.weather[0].description;
    weatherDesc.textContent = desc;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}

async function apiFetchForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayForecast(data) {
    const dailyForecasts = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    
    if (dailyForecasts[0]) {
        forecast1.innerHTML = `Tomorrow: ${Math.round(dailyForecasts[0].main.temp)}&deg;C, ${dailyForecasts[0].weather[0].description}`;
    }
    if (dailyForecasts[1]) {
        forecast2.innerHTML = `Day 2: ${Math.round(dailyForecasts[1].main.temp)}&deg;C, ${dailyForecasts[1].weather[0].description}`;
    }
    if (dailyForecasts[2]) {
        forecast3.innerHTML = `Day 3: ${Math.round(dailyForecasts[2].main.temp)}&deg;C, ${dailyForecasts[2].weather[0].description}`;
    }
}

const membersUrl = 'data/members.json';
const spotlightsContainer = document.querySelector('#spotlights-container');

async function getSpotlights() {
    try {
        const response = await fetch(membersUrl);
        if (response.ok) {
            const data = await response.json();
            displaySpotlights(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displaySpotlights(members) {
    const qualifiedMembers = members.filter(member => member.membership === 2 || member.membership === 3);
    const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    spotlightsContainer.innerHTML = '';
    selected.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');

        const img = document.createElement('img');
        img.setAttribute('src', `images/${member.image}`);
        img.setAttribute('alt', `${member.name} logo`);
        img.setAttribute('loading', 'lazy');

        const name = document.createElement('h3');
        name.textContent = member.name;

        const phone = document.createElement('p');
        phone.textContent = member.phone;

        const address = document.createElement('p');
        address.textContent = member.address;

        const website = document.createElement('a');
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.textContent = member.website;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);

        spotlightsContainer.appendChild(card);
    });
}

apiFetchWeather();
apiFetchForecast();
getSpotlights();