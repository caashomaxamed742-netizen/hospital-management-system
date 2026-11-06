const toast = document.getElementById('toast');
let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}
document.querySelectorAll('.quick-action').forEach(button => {
  button.addEventListener('click', () => showToast(button.dataset.action + ' page is a demo. Connect the PHP/MySQL module to enable it.'));
});
document.querySelectorAll('.nav-link[data-page]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
    link.classList.add('active');
    const page = link.dataset.page;
    if (page !== 'Dashboard') showToast(page + ' module is ready for development.');
    document.getElementById('sidebar').classList.remove('open');
  });
});
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});
document.getElementById('searchInput').addEventListener('input', event => {
  const query = event.target.value.toLowerCase();
  document.querySelectorAll('#transactionsTable tbody tr').forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(query) ? '' : 'none';
  });
});
document.getElementById('periodSelect').addEventListener('change', event => {
  showToast('Chart period selected: ' + event.target.value + '. Replace demo chart with database data.');
});
document.getElementById('logoutBtn').addEventListener('click', event => {
  event.preventDefault();
  showToast('Demo logout selected. Add session-based logout in PHP.');
});
