// Wait until the entire HTML document has been completely loaded and parsed
document.addEventListener("DOMContentLoaded", () => {

    // Retrieve the value entered by the user into the input field with ID "age"
    const age = document.getElementById("age").value;

    // Find the selected (checked) radio button from all inputs named "gender" and get its value
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Store the user's age in the browser's localStorage under the key "userAge"
    localStorage.setItem("userAge", age);

    // Store the user's selected gender in localStorage under the key "userGender"
    localStorage.setItem("userGender", gender);


  });