const townName = document.querySelector('#town');
const weatherIcon = document.querySelector('#graphic');
const weatherDesc = document.querySelector('#description');
const currentTemp = document.querySelector('#temperature');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=6.339&lon=5.617&units=metric&appid=d00d88e180d048b6d96859b13800dcfd';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(data) {
    townName.textContent = data.name;
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherDesc.textContent = desc;
}

apiFetch();