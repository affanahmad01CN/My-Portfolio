document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS
  emailjs.init('6aTpGrh9YEd5GWMzW');
  
  const contactForm = document.getElementById('contactForm');
  const messageDiv = document.getElementById('form-message');

  // Check if elements exist before adding event listener
  if (!contactForm || !messageDiv) {
    console.error('Form or message element not found!');
    return;
  }

  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    try {
      // Show sending state
      messageDiv.textContent = "Sending your message...";
      messageDiv.style.color = "#3b82f6";
      
      const response = await emailjs.sendForm(
        'service_vojwert',
        'template_o8qr1vi',
        this
      );
      
      // Success handling
      messageDiv.textContent = "Message sent successfully!";
      messageDiv.style.color = "#10b981";
      contactForm.reset();
      
    } catch (error) {
      // Error handling
      console.error("EmailJS Error:", error);
      messageDiv.textContent = "Failed to send message. Please try again.";
      messageDiv.style.color = "#ef4444";
    }
  });
});