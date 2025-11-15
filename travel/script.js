const bookNowButton = document.getElementById('book-now-btn');
const bookingForm = document.getElementById('booking-form');

bookNowButton.addEventListener('click', () => {
  bookingForm.classList.toggle('show'); // Toggles the display of the form
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const destination = document.getElementById('destination').value;
  const fromDate = document.getElementById('from-date').value;
  const toDate = document.getElementById('to-date').value;
  const travelers = document.getElementById('travelers').value;
  const email = document.getElementById('email').value;

  // Here, you could display the user input for demonstration purposes:
  const bookingSummary = document.createElement('p');
  bookingSummary.textContent = `
    Destination: ${destination}
    From Date: ${fromDate}
    To Date: ${toDate}
    Number of Travelers: ${travelers}
    Email: ${email}
  `;
  bookingForm.appendChild(bookingSummary);

  // In a real scenario, you'd process the user input further,
  // potentially sending it to a server for booking or storing it locally.

  bookingForm.reset(); // Clear the form after submission
});
