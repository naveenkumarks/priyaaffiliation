document.getElementById('year').textContent = new Date().getFullYear();

function showMessage() {
  const message = document.getElementById('form-message');
  if (message) {
    message.textContent = 'Thanks! Your request is queued. We will reach out shortly.';
  }
}
