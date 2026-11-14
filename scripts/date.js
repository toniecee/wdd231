const currentYearSpan = document.querySelector('#currentyear');
const lastModifiedParagraph = document.querySelector('#lastModified');

const today = new Date();
currentYearSpan.textContent = today.getFullYear();

lastModifiedParagraph.innerHTML = `Last Modification: <span class="highlight">${document.lastModified}</span>`;