// Handles clicks
document.addEventListener("DOMContentLoaded", function() {
    // Get all elements with the class 'shop-item'
    const shopItems = document.querySelectorAll('.shop-item');
    
    // Loop through each shop item
    shopItems.forEach(item => {
        // Get the link from the data-link attribute
        const link = item.getAttribute('data-link');
        
        // Create an anchor element
        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.target = '_blank'; 
        anchor.style.textDecoration = 'none';
        
        // Move the content of the shop-item into the anchor
        while (item.firstChild) {
            anchor.appendChild(item.firstChild);
        }
        
        // Append the anchor to the shop-item
        item.appendChild(anchor);
    });
});
