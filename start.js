// Wait until the entire HTML document has been completely loaded and parsed
document.addEventListener("DOMContentLoaded", () => {
  
  // Get the form element with the ID "startForm" from the DOM and store it in a variable
  const startForm = document.getElementById("startForm");

  // Add an event listener to handle the form’s submit event
  startForm.addEventListener("submit", (e) => {
    // Prevent the default form submission behavior (which would refresh the page)
    e.preventDefault();

    // Retrieve the value entered by the user into the input field with ID "age"
    const age = document.getElementById("age").value;

    // Find the selected (checked) radio button from all inputs named "gender" and get its value
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Store the user's age in the browser's localStorage under the key "userAge"
    localStorage.setItem("userAge", age);

    // Store the user's selected gender in localStorage under the key "userGender"
    localStorage.setItem("userGender", gender);
    
  });
});
// This code handles the form submission for the start page of a mood tracker application.