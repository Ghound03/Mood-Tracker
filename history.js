// Wait for the whole HTML document to be fully loaded and parsed
document.addEventListener("DOMContentLoaded", () => {   

// Get the HTML element that will display the list of mood entries
const historyList= document.getElementById("historyList");

// Try to get the saved mood entries from localStorage
const stored= localStorage.getItem("moodEntries");

// If there is saved data, parse it into an array; otherwise, use an empty array
const moodArray= stored ? JSON.parse(stored) : [];

// Clear anything currently displayed inside the history list area
historyList.innerHTML = "";

// If there are no mood entries to show display a message
if (moodArray.length === 0) {
historyList.innerHTML = "<p>You haven’t logged any moods yet.</p>";
return;
}

});
