const params = new URLSearchParams(window.location.search);
const summaryContainer = document.querySelector('#application-summary');

if (summaryContainer) {
    summaryContainer.innerHTML = `
        <p><strong>First Name:</strong> ${params.get('firstName') || ''}</p>
        <p><strong>Last Name:</strong> ${params.get('lastName') || ''}</p>
        <p><strong>Email Address:</strong> ${params.get('email') || ''}</p>
        <p><strong>Mobile Phone Number:</strong> ${params.get('phone') || ''}</p>
        <p><strong>Business / Organization Name:</strong> ${params.get('orgName') || ''}</p>
        <p><strong>Submission Timestamp:</strong> ${params.get('timestamp') || ''}</p>
    `;
}