// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    
    // Example: Sending form data to server (you need to implement server-side logic)
    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Success message
            alert('Message sent successfully!');
            // Clear form fields
            document.getElementById('contact-form').reset();
        } else {
            // Error message
            alert('Failed to send message. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Error message
        alert('Failed to send message. Please try again later.');
    });
});
