// Wait for the entire HTML document to be fully loaded and parsed
document.addEventListener("DOMContentLoaded", () => {

  //  Get the welcome message element 
  const welcomeMessage = document.getElementById("welcomeMessage");

  //  Retrieve the user's age from localStorage 
  const age = localStorage.getItem("userAge");

  //  Retrieve the user's gender from localStorage 
  const gender = localStorage.getItem("userGender");

  // If both age and gender data are found in localStorage, display them as a welcome message
  if (age && gender) {
    welcomeMessage.textContent = `Welcome! Age: ${age}, Gender: ${gender}`;
  }


});
