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