// Get a reference to the form element
const contactForm = document.getElementById("contactForm");

// Add a submit event listener to the form
contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form data
  const name = contactForm.elements["name"].value;
  const email = contactForm.elements["email"].value;
  const message = contactForm.elements["message"].value;

  // Initialize Email.js with your credentials
  emailjs.init("bPpo8tjmMpHLXtrc_");

  // Prepare the email template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };

  // Send the email
  emailjs.send("service_dja0xim", "template_c3kloja", templateParams)
    .then(function(response) {
      console.log("Email sent successfully!", response);
      const success = document.getElementById('successMessage');
      success.style.display = "block";
      // You can add success message or redirect here
    }, function(error) {
      console.error("Email could not be sent:", error);
      const fail = document.getElementById('failMessage');
      fail.style.display = "block";
      // You can handle errors here
    });
});
