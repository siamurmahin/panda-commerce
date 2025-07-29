// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!');
    });
});

// Booking functionality
const bookingForm = document.querySelector('#booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your table has been booked!');
    });
}

// Checkout functionality
const checkoutForm = document.querySelector('#checkout-form');

if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your order has been placed!');
    });
}
