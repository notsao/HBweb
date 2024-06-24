document.addEventListener('DOMContentLoaded', function() {
    // Initially hide the login_click element
    var loginClickElement = document.getElementById('login_click');
    if (loginClickElement) {
        loginClickElement.style.display = "none";
    } else {
        console.error('Element with ID "login_click" not found.');
    }

    // Function to show the login_click element
    function showLoginClick() {
        if (loginClickElement) {
            loginClickElement.style.display = "block"; // Change to the desired display type
        } else {
            console.error('Element with ID "login_click" not found.');
        }
    }

    // Function to register interest and store inputs in local storage
    function getEntry() {
        var firstNameInput = document.getElementById('first-name');
        var firstName = firstNameInput.value;
        console.log(firstName);

        var lastNameInput = document.getElementById('last-name');
        var lastName = lastNameInput.value;
        console.log(lastName);

        var emailInput = document.getElementById('email');
        var email = emailInput.value;
        console.log(email);

        var passwordInput = document.getElementById('password');
        var password = passwordInput.value;
        console.log(password);

        var interestInput = document.getElementById('interest');
        var interest = interestInput.value;
        console.log(interest);
        
        localStorage.setItem('email', email);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('password', password);
        localStorage.setItem('lastName', lastName);

        console.log(email, 'has signed up!');

        return {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            interest: interest
        };
    }

    // Add an event listener to the create_acc button to trigger the getEntry function and show the login_click element
    document.getElementById('create_acc').addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Call the getEntry function
        var entryData = getEntry();
        
        // Show the login_click element
        showLoginClick();
        
        // Log the entry data object
        console.log(entryData);
    });
});
