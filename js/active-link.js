document.addEventListener("DOMContentLoaded", () => {
    const currentUrl = window.location.href;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Check if the link's href matches the current window URL
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
        else{
            link.classList.remove('active');
        }
    });
});