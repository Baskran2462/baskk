const toggle = document.getElementById('mode-toggle');

toggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    const elements = document.querySelectorAll('.container,.main,.right-section');
    elements.forEach(el => el.classList.toggle('dark'));
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
