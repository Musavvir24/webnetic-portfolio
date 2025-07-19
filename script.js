 window.addEventListener('DOMContentLoaded', function () {

 const openBtn = document.getElementById('openFormBtn');
  const closeBtn = document.getElementById('closeFormBtn');
  const modal = document.getElementById('quoteModal');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
   });
   document.getElementById('quoteForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const status = document.getElementById('formStatus');

  try {
    const response = await fetch('https://formspree.io/f/xqalagko', {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.textContent = "✅ Thanks! We'll be in touch soon.";
      form.reset();
    } else {
      status.textContent = "❌ Oops! Something went wrong.";
    }
  } catch (err) {
    status.textContent = "❌ Network error.";
  }
}); 
// Open modal
document.querySelectorAll('.open-modal-btn').forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

// Close modal
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').style.display = 'none';
  });
});

// Click outside to close
window.addEventListener('click', (e) => {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
