// Initialize the counters from localStorage or set to 0
let counter1 = localStorage.getItem('counter1') ? parseInt(localStorage.getItem('counter1')) : 0;
let counter2 = localStorage.getItem('counter2') ? parseInt(localStorage.getItem('counter2')) : 0;

// Function to update the display
function updateDisplay(counterId) {
    document.getElementById(`counter${counterId}`).innerText = eval(`counter${counterId}`);
}

// Function to increment the counter
function increment(counterId) {
    eval(`counter${counterId}++`);
    updateDisplay(counterId);
    saveCounter(counterId);
}

// Function to decrement the counter
function decrement(counterId) {
    if (eval(`counter${counterId}`) > 0) {
        eval(`counter${counterId}--`);
    }
    updateDisplay(counterId);
    saveCounter(counterId);
}

// Function to reset the counter
function reset(counterId) {
    eval(`counter${counterId} = 0`);
    updateDisplay(counterId);
    saveCounter(counterId);
}

// Function to save the counter value to localStorage
function saveCounter(counterId) {
    localStorage.setItem(`counter${counterId}`, eval(`counter${counterId}`));
}

// Initial update of the display after loading the page
updateDisplay(1);
updateDisplay(2);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
            console.log('Service Worker registered with scope: ', registration.scope);
        }, function(err) {
            console.log('Service Worker registration failed: ', err);
        });
    });
}

