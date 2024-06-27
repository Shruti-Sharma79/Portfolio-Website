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



const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
