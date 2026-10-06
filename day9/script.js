// Default checklist items
const checklistItems = [
    "clear bag",
    "water",
    "rally towel"
];

// Get the HTML elements
const checklist = document.getElementById("checklist");
const checklistForm = document.getElementById("checklist-form");
const itemInput = document.getElementById("item-input");

// Display all items in the array
function displayItems() {
// Clear the current list
    checklist.innerHTML = "";

    // Add each item to the unordered list
    checklistItems.forEach(function(item) {
        const listItem = document.createElement("li");

        listItem.textContent = item;

        checklist.appendChild(listItem);
});
}



// Add a new item when the form is submitted
checklistForm.addEventListener("submit", function(event) {
// Prevent the page from refreshing
event.preventDefault();

// Get the text from the input
const newItem = itemInput.value.trim();

// Only add the item if the input isn't empty
if (newItem !== "") {
    checklistItems.push(newItem);

    // Update the list on the page
    displayItems();

    // Clear the input box
    itemInput.value = "";

    // Put the cursor back in the input box
    itemInput.focus();
}


});

// Display the default items when the page loads
displayItems();