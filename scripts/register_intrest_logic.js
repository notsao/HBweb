document.addEventListener('DOMContentLoaded', function() {
    // Register interest logic (write inputs to JSON)
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

        var cityInput = document.getElementById('city');
        var city = cityInput.value;
        console.log(city);

        var postcodeInput = document.getElementById('postcode');
        var postcode = postcodeInput.value;
        console.log(postcode);

        var interestInput = document.getElementById('interest');
        var interest = interestInput.value;
        console.log(interest);

        var messageInput = document.getElementById('message');
        var message = messageInput.value;
        console.log(message);

        return {
            firstName: firstName,
            lastName: lastName,
            email: email,
            city: city,
            postcode: postcode,
            interest: interest,
            message: message
        };
    }

    // Add an event listener to the submit button to trigger the getEntry function
    document.getElementById('submit-button').addEventListener('click', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Call the getEntry function
        var entryData = getEntry();
        
        // You can now use the entryData object as needed
        console.log(entryData);
    });
});