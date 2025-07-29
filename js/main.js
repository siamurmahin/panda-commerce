// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

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

// Menu filter
const filterButtons = document.querySelectorAll('.btn-group .btn');
const menuItems = document.querySelectorAll('.menu-item');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            const filter = button.dataset.filter;

            menuItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}


// Booking form
if (document.getElementById('booking-form')) {
    flatpickr("#date", {
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        minDate: "today"
    });

    flatpickr("#time", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "h:i K",
        time_24hr: false
    });
}
