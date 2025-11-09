document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');
    const body = document.querySelector('.template4-portfolio-root');
    const themeIcon = themeToggle.querySelector('i');

    // Theme preference
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    
    if (savedTheme) {
        body.classList.add('template4-dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('template4-dark-mode');
        const isDarkMode = body.classList.contains('template4-dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        if(isDarkMode) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // Mobile navigation
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('template4-nav-active');
    });

    // Smooth scrolling and active section highlighting
    const sections = document.querySelectorAll('.template4-section');
    const navLinksA = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
        const scrollPosition = window.scrollY + 100;
        let currentSectionId = 'about';

        sections.forEach(section => {
            const offsetTop = section.offsetTop;
            const offsetBottom = offsetTop + section.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                currentSectionId = section.id;
            }
        });
        
        navLinksA.forEach(link => {
            link.classList.remove('template4-active');
            if (link.getAttribute('href').substring(1) === currentSectionId) {
                link.classList.add('template4-active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);

    navLinksA.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.classList.remove('template4-nav-active'); // Close mobile nav on click
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image hover effect for touch devices
    const imageContainer = document.querySelector('.template4-image-container');
    imageContainer.addEventListener('touchstart', function() {
        this.classList.toggle('hover');
    });
});
