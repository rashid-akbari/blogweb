// Alert for blog buttons
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    alert("This would take you to the full blog post!");
  });
});

// Simple contact form handling
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}
