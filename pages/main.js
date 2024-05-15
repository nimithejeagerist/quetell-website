// Handles the navbar interactivity
document.addEventListener("DOMContentLoaded", function() {
    // Get the current page's URL
    const currentPage = window.location.pathname;
    
    // Map of page URLs to link IDs
    const pageMap = {
        "/html/index.html": "home-link",
        "/html/about-us.html": "about-link",
        "/html/services.html": "services-link",
        "/html/events.html": "services-link",
        "/html/shop.html": "shop-link",
        "/html/contact-us.html": "contact-link",
    };
    
    // Get the corresponding link ID
    const linkId = pageMap[currentPage];
    console.log("Current page:", currentPage);
    console.log("Mapped linkId:", linkId);
    
    // If a matching link is found, add the active class and aria-current attribute
    if (linkId) {
        const activeLink = document.getElementById(linkId);
        activeLink.classList.add("active");
    }
});

function openNav() {
    document.getElementById("overlayNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("overlayNav").style.width = "0%";
}

// Fade in mechanism
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(fadeEl => {
        observer.observe(fadeEl);
    });
});

