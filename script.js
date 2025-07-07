document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out! I will get back to you soon.');
  e.target.reset();
});
