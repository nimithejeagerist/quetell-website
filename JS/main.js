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
