document.addEventListener("DOMContentLoaded", function() {
    // Hide all job-info-container by default
    var job1InfoContainer = document.querySelector(".job1-info-container");
    job1InfoContainer.style.display = "none";

    var job2InfoContainer = document.querySelector(".job2-info-container");
    job2InfoContainer.style.display = "none";

    var job3InfoContainer = document.querySelector(".job3-info-container");
    job3InfoContainer.style.display = "none";

    var job4InfoContainer = document.querySelector(".job4-info-container");
    job4InfoContainer.style.display = "none";

    // Add event listener to job1-container
    var job1Container = document.querySelector(".job1-container");
    job1Container.addEventListener("click", function() {
        // Toggle the visibility of job1-info-container
        if (job1InfoContainer.style.display === "none") {
            job1InfoContainer.style.display = "block";
        } else {
            job1InfoContainer.style.display = "none";
        }
    });

    // Add event listener to job2-container
    var job2Container = document.querySelector(".job2-container");
    job2Container.addEventListener("click", function() {
        // Toggle the visibility of job2-info-container
        if (job2InfoContainer.style.display === "none") {
            job2InfoContainer.style.display = "block";
        } else {
            job2InfoContainer.style.display = "none";
        }
    });

    // Add event listener to job3-container
    var job3Container = document.querySelector(".job3-container");
    job3Container.addEventListener("click", function() {
        // Toggle the visibility of job3-info-container
        if (job3InfoContainer.style.display === "none") {
            job3InfoContainer.style.display = "block";
        } else {
            job3InfoContainer.style.display = "none";
        }
    });

    // Add event listener to job4-container
    var job4Container = document.querySelector(".job4-container");
    job4Container.addEventListener("click", function() {
        // Toggle the visibility of job4-info-container
        if (job4InfoContainer.style.display === "none") {
            job4InfoContainer.style.display = "block";
        } else {
            job4InfoContainer.style.display = "none";
        }
    });
});





//login logic (if username + password for user == the one in the json return true)
