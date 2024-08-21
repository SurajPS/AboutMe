(function() {
    emailjs.init("mkndsps@gmail.com"); // Replace with your EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Prepare email parameters
    var emailParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams)
        .then(function(response) {
            console.log("Email sent successfully!", response.status, response.text);
            alert("Email sent successfully!");
        }, function(error) {
            console.error("Failed to send email.", error);
            alert("Failed to send email. Please try again.");
        });
    /*alert('Thank you for your message!');*/
});

console.log("Portfolio site is live!");
