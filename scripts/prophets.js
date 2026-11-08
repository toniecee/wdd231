
// 1. URL of the JSON data
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';

// 2. Select the cards container
const cards = document.querySelector('#cards');

// 3. Fetch the prophet data
async function getProphetData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();

        // Check the data in the browser console
        console.table(data.prophets);

        // Display the prophets
        displayProphets(data.prophets);

    } catch (error) {
        console.error("Error fetching prophet data:", error);
        cards.textContent = "Sorry, the prophet information could not be loaded.";
    }
}

// 4. Display the prophets
const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {

        // Create the card section
        const card = document.createElement('section');

        // Create the prophet's name
        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Create date of birth
        const birthDate = document.createElement('p');
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;

        // Create place of birth
        const birthPlace = document.createElement('p');
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Create the prophet's portrait
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Add all elements to the card
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // Add the completed card to the webpage
        cards.appendChild(card);

    });
};

// 5. Start fetching the data
getProphetData();
