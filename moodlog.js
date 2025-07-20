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

  // Define a function to get mood history stored in localStorage
  // Returns an array of mood entries, or an empty array if none exists
  function getMoodHistory() {
    const stored = localStorage.getItem("moodEntries"); 
    return stored ? JSON.parse(stored) : []; 
  }

  // Define a function to save a new mood entry to localStorage
  function saveMood(mood, comment) {
    const history = getMoodHistory(); // Load existing mood history

    // Create a new entry object with mood, comment, and the current date/time
    const entry = {
      mood: mood,                          
      comment: comment,                       
      time: new Date().toLocaleString()       
    };

    history.push(entry); // Add the new entry to the history array

    // Save the updated array back to localStorage as a JSON string
    localStorage.setItem("moodEntries", JSON.stringify(history));
  }


});
