const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const data = {
    name: nameInput.value,
    email: emailInput.value,
    subject: subjectInput.value,
    message: messageInput.value,
  };

  // Replace with your actual Google Sheets API credentials and spreadsheet ID
  const spreadsheetId = 'AKfycbz0gHEwQ3iGK0mM1_qmci2Z_AEXnrb3yw7DFPGrCSRl6I9OWQG9GQkzUAuezZ1Ns2svng';
  const sheetName = 'Form Responses';  // Adjust if needed

  const url = 'https://script.google.com/macros/s/AKfycbz0gHEwQ3iGK0mM1_qmci2Z_AEXnrb3yw7DFPGrCSRl6I9OWQG9GQkzUAuezZ1Ns2svng/exec';

  fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // Handle successful submission (e.g., display a confirmation message)
    alert('Your message has been submitted successfully!');
    form.reset();  // Reset form after successful submission
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle submission errors (e.g., display an error message)
    alert('There was an error submitting your message. Please try again later.');
  });
});

// Function to handle response from Google Apps Script (optional)
function handleResponse(data) {
  console.log('Response from Google Apps Script:', data);
  // You can use this function to perform additional actions based on the response
  // (e.g., display a success message specific to the response)
}