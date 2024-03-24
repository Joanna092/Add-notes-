document.addEventListener('DOMContentLoaded', function() {
  // Code placed here will run when the DOM content has loaded.
  var noteList = document.getElementById('note-list');
  var noteInput = document.getElementById('note-input');
  var addButton = document.getElementById('add-button');

  var addNote = function() {
   
 //Create a div for adding new Note
 var newStickyNote = document.createElement('div');

 //add class to div 
 newStickyNote.setAttribute('class', 'sticky-note'); 

 // Create a div element for the sticky note header.
 var stickyHeader = document.createElement('div');
 // Give it a class of sticky-header.
 stickyHeader.setAttribute('class', 'sticky-header');

 // Create a span element for the close button.
 var closeButton = document.createElement('span');
 // Give it a class of close-btn.
 closeButton.setAttribute('class', 'close-btn');
 // Set the close button content.
 closeButton.innerText = '×';
 // Define the event listener for click to close the sticky note.
 closeButton.addEventListener('click', function() {
  var stickyNoteToRemove = this.closest('.sticky-note');
  stickyNoteToRemove.remove();
 });

 // Append the close button to the sticky header.
 stickyHeader.appendChild(closeButton);

//create a div for the content of the note
 var stickyContent = document.createElement('div');

 // Give it a class of sticky-content.
 stickyContent.setAttribute('class', 'sticky-content');
 // Make the content non-editable.
 stickyContent.setAttribute('contenteditable', 'false');
 // Catch content from the input field 
 stickyContent.innerHTML = noteInput.value;

//Add noteText to the div
 newStickyNote.appendChild(stickyHeader);
 newStickyNote.appendChild(stickyContent);

// Append noteList to the note-list div
  noteList.appendChild(newStickyNote );
 
};

addButton.addEventListener('click', function () {
    addNote();
    // Clear the input element by setting it to empty string.
    noteInput.value = '';
  });
});

