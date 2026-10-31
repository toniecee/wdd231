// Set current year in footer
const currentYearSpan = document.querySelector('#currentyear');
const today = new Date();
currentYearSpan.textContent = today.getFullYear();

// Set last modified date in footer
const lastModifiedParagraph = document.querySelector('#lastModified');
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;