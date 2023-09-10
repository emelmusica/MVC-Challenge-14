// Get form elements
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submitBtn');
const nameInput = document.getElementById('contactName');
const emailInput = document.getElementById('contactEmail');
const messageInput = document.getElementById('contactMessage');

// Event listener for form submission
submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Perform form validation 
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }


    alert('Form submitted successfully!');
    contactForm.reset(); // Clear form
});