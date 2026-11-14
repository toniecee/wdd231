// 1. Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// 2. Define the API URL with coordinates for Trier, Germany, imperial units, and your API key
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=d00d88e180d048b6d96859b13800dcfd';

// 3. Define an asynchronous function to fetch the data
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Testing only: view the JSON payload in your browser console
      displayResults(data); // Call the display function
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// 4. Define the displayResults function to fill in the blanks
function displayResults(data) {
  // Display rounded or raw temperature in Fahrenheit
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;

  // Build the icon source URL using the icon code from the weather array
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  // Get the weather condition description
  const desc = data.weather[0].description;

  // Set attributes and text content on the DOM elements
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

// 5. Invoke the async function
apiFetch();