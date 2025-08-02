//Wait for the whole HTML document to be fully loaded and parsed
document.addEventListener("DOMContentLoaded", () => {   

//Get the HTML element that will display the list of mood entries
const historyList= document.getElementById("historyList");

// Get the "Clear History" button element
const clearBtn = document.getElementById("clearHistoryBtn");

//Try to get the saved mood entries from localStorage
const stored= localStorage.getItem("moodEntries");

//If there is saved data, parse it into an array; otherwise, use an empty array
const moodArray= stored ? JSON.parse(stored) : [];

//Clear anything currently displayed inside the history list area
historyList.innerHTML = "";

//If there are no mood entries to show display a message
if (moodArray.length === 0) {

historyList.innerHTML = "<p>You haven’t logged any moods yet.</p>";

return;
}

// Create a new element to display the mood entries as a table
const table = document.createElement("table");

//Add a CSS class to the table for styling
table.classList.add("mood-table");

//Create the header row for the table
const headerRow = document.createElement("tr");

headerRow.innerHTML = "<th>Mood</th><th>Note</th><th>Time</th>";

table.appendChild(headerRow);

//Go through each mood entry in the moodArray
moodArray.forEach(entry => {

const row = document.createElement("tr");

row.innerHTML = `
<td>${entry.mood}</td>
<td>${entry.comment || "<em>No comment</em>"}</td>
<td>${entry.time}</td>
    `;

table.appendChild(row);

  });

//Finally, add the completed table into the historyList div on the page
historyList.appendChild(table);

// Add a click event listener to the "Clear History" button
clearBtn.addEventListener("click",() => {

// Ask the user to confirm before deleting the mood history
const confirmDelete= confirm("Are you sure you want to clear all mood entries?");

// If the user confirms deletion it removes the mood entries from localStorage
if (confirmDelete) {
      
localStorage.removeItem("moodEntries");

// Replace the table with a message saying all entries were cleared
historyList.innerHTML= "<p>🗑️ All mood history has been cleared.</p>";
}

});

});