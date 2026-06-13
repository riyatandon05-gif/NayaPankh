document.addEventListener('DOMContentLoaded', () => {
    
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Explicitly grab storage state profiles
    let cachedTheme = localStorage.getItem('theme') || 'dark';
    
    // Forced application engine logic
    document.body.setAttribute('data-theme', cachedTheme);
    refreshToggleUi(cachedTheme);

    themeToggle.addEventListener('click', () => {
        let currentMode = document.body.getAttribute('data-theme');
        let finalMode = (currentMode === 'dark') ? 'light' : 'dark';
        
        // Dynamic DOM attribute update engine trigger
        document.body.setAttribute('data-theme', finalMode);
        localStorage.setItem('theme', finalMode);
        refreshToggleUi(finalMode);
    });

    function refreshToggleUi(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun'; // Sun icon shows up during dark mode
        } else {
            themeIcon.className = 'fas fa-moon'; // Moon icon shows up during light mode
        }
    }

    // --- Menu Toggle Mobile Drawer ---
    const hamburger = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});
/* --- Core Dark Mode (Default Theme Setup) --- */
