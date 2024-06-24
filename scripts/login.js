// Function to handle login
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Retrieve user data from local storage
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    var storedFirstName = localStorage.getItem('firstName');
    var storedLastName = localStorage.getItem('lastName');

    // Get the client_errorElement
    var client_errorElement = document.getElementById('client_error');

    // Initially hide the client_error element if it exists
    if (client_errorElement) {
        client_errorElement.style.display = "none";
    } else {
        console.error('Element with ID "client_error" not found.');
    }

    // Perform comparison
    if (email === storedEmail && password === storedPassword) {
        console.log('Login successful');
        console.log(storedEmail, storedPassword, storedFirstName, storedLastName);
    } else {
        console.log('Login failed');

        // Show the client_error element
        showClient_error(client_errorElement);
    }
}

// Function to show the client_error element
function showClient_error(client_errorElement) {
    if (client_errorElement) {
        client_errorElement.style.display = "block";
    } else {
        console.error('Element with ID "client_error" not found.');
    }
}

// Wait for the DOM to be fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function() {
    // Initially hide the client_error element
    var client_errorElement = document.getElementById('client_error');
    if (client_errorElement) {
        client_errorElement.style.display = "none";
    } else {
        console.error('Element with ID "client_error" not found.');
    }

    // Add event listener to the login button
    document.getElementById('login').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Call the login function
        login();
    });
});
