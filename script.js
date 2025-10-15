// Theme toggle
const themeBtn = document.getElementById('themeToggle');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change icon or emoji depending on theme
  if (document.body.classList.contains('dark-mode')) {
    themeBtn.textContent = '🎄'; // Winter
  } else {
    themeBtn.textContent = '🎃'; // Halloween / Autumn
  }
});

// Simple contact form submit (no backend)
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out! We’ll get back to you soon.');
  e.target.reset();
});
