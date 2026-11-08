// 1. Fetch Member Data using Async/Await
const url = 'data/members.json';
const membersContainer = document.querySelector('#members-container');

async function getMembers() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayMembers(data.companies);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

getMembers();

// 2. Display Members Function
const displayMembers = (companies) => {
    membersContainer.innerHTML = ''; // Clear container

    companies.forEach((company) => {
        const card = document.createElement('section');

        const img = document.createElement('img');
        img.setAttribute('src', `images/${company.image}`);
        img.setAttribute('alt', `Logo of ${company.name}`);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '120');
        img.setAttribute('height', '120');

        const name = document.createElement('h3');
        name.textContent = company.name;

        const tagline = document.createElement('p');
        tagline.textContent = company.tagline;
        tagline.classList.add('tagline');

        const address = document.createElement('p');
        address.textContent = `Address: ${company.address}`;

        const phone = document.createElement('p');
        phone.textContent = `Phone: ${company.phone}`;

        const website = document.createElement('a');
        website.setAttribute('href', company.website);
        website.setAttribute('target', '_blank');
        website.textContent = company.website;

        const level = document.createElement('p');
        let levelText = 'Member';
        if (company.membership === 2) levelText = 'Silver Member';
        if (company.membership === 3) levelText = 'Gold Member';
        level.textContent = `Membership Level: ${levelText}`;
        level.classList.add('membership-level');

        // Append elements to card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(tagline);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(level);

        // Append card to container
        membersContainer.appendChild(card);
    });
};

// 3. Grid / List View Toggle Functionality
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

gridButton.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
    gridButton.classList.add('active');
    listButton.classList.remove('active');
});

listButton.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
    listButton.classList.add('active');
    gridButton.classList.remove('active');
});

// 4. Hamburger Menu Toggle for Mobile
const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuButton.textContent = navMenu.classList.contains('open') ? 'X' : '☰';
});

// 5. Footer Dynamic Year and Last Modified Date
document.querySelector('#current-year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;