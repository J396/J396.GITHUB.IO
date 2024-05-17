function changeText() {
    console.log("Function executed!");
    // Get the element with the ID "Socname"
    var Socname = document.getElementById("Socname");

    // Check if the element exists
    if (Socname) {
        // Change the text content of the element
        Socname.textContent = "Text Changed!";
    }
}
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("message").innerText = "Please enter a valid email address.";
        return;
    }

    // Here you can send the data to your backend server for processing
    // For example, using AJAX to send the data to a PHP script
    
    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    document.getElementById("message").innerText = "Thank you for signing up, " + name + "!";
});