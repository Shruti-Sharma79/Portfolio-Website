//There is this typed.js library the class "text". The code you provided sets up the Typed instance with an array of strings to be typed out, each with a typing speed of 100 milliseconds per character, a backspacing speed of 100 milliseconds per character, a delay of 1000 milliseconds before backspacing, and the loop set to true to continuously cycle through the array of strings. This will create a cool typing animation on your webpage for the specified elements.

var typed = new Typed(".text",{
  strings: [
    "Frontend Developer",
    "DevOps Engineer",
    "STPO at DIT University"
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});




function openPDF(event) {
    event.preventDefault(); // Prevent default link behavior (i.e., direct download)
    
    // Get the URL of the PDF file
    var pdfURL = event.target.getAttribute('href');
    
    // Open the PDF file in a new tab or window
    window.open(pdfURL, '_blank');
}





    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        fetch('https://script.google.com/macros/s/AKfycbw54dP7SM4fR11pS5XV172_mzf1m_OEuN6jrexJZA6FeZwiixluFEd5WH9ZDGS-ZmYMyg/exec', {
            method: 'POST',
            body: JSON.stringify({ name, email, subject, message }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                alert('Your message has been sent successfully!');
            } else {
                alert('There was an error sending your message.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message.');
        });
    });