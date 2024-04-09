document.addEventListener("DOMContentLoaded", function () {
  // Code placed here will run when the DOM content has loaded.
  var noteList = document.getElementById("note-list");
  var noteTitle = document.getElementById("note-title");
  var contentInput = document.getElementById("content-input");
  var addButton = document.getElementById("add-button");


  var addNote = function () {
    if (!noteTitle.value.trim() || !contentInput.value.trim()) {
      alert("Please enter both title and content.");
      return; // Exit the function early if validation fails
    }

    //Create a div for adding new Note
    var newStickyNote = document.createElement("div");

    //add class to div
    newStickyNote.setAttribute("class", "sticky-note");

    // Create a div element for the sticky note header.
    var stickyHeader = document.createElement("div");

    // Create a span element for the close button.
    var closeButton = document.createElement("span");
    // Give it a class of close-btn.
    closeButton.setAttribute("class", "close-btn");
    // Set the close button content.
    closeButton.innerText = "×";
    // Define the event listener for click to close the sticky note.
    closeButton.addEventListener("click", function () {
      var stickyNoteToRemove = this.closest(".sticky-note");
      stickyNoteToRemove.remove();
    });

    // Append the close button to the sticky header.
    stickyHeader.appendChild(closeButton);

    // Give it a class of sticky-header.
    stickyHeader.setAttribute("class", "sticky-header");

    var stickyTitle = document.createElement("h1");
    stickyTitle.innerHTML = noteTitle.value;

    //create a div for the content of the note
    var stickyContent = document.createElement("div");

    // Give it a class of sticky-content.
    stickyContent.setAttribute("class", "sticky-content");
    // Make the content non-editable.
    stickyContent.setAttribute("contenteditable", "false");
    // Catch content from the input field
    stickyContent.innerText = contentInput.value;

    //Add noteText to the div
    newStickyNote.appendChild(stickyHeader);
    newStickyNote.appendChild(stickyTitle);
    newStickyNote.appendChild(stickyContent);

    // Append noteList to the note-list div
    noteList.appendChild(newStickyNote);
  };

  addButton.addEventListener("click", function () {
    if (noteTitle.value.trim() && contentInput.value.trim()) {
      addNote();
      noteTitle.value = "";
      contentInput.value = "";
    }
  });

  //code for the popup

  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const popupContainer = document.getElementById('popupContainer');
  const closeBtn = document.getElementById('closeBtn');
  const userNote = document.getElementById('userNote');

  // Replace this sample note with your actual user note
  const sampleNote = "This is a sample user note. Replace it with the actual user's notee title This will be the content of the first note. I will give it more text, so that people know what can be happening here. This is not a title, but the content. he he he This is a sample user note. Replace it with the actual user's notee title This will be the content of the first note. I will give it more text, so that people know what can be happening here. This is not a title, but the content. he he he This is a sample user note. Replace it with the actual user's notee title This will be the content of the first note. I will give it more text, so that people know what can be happening here. This is not a title, but the content. he he he This is a sample user note. Replace it with the actual user's notee title This will be the content of the first note. I will give it more text, so that people know what can be happening here. This is not a title, but the content. he he he This is a sample user note. Replace it with the actual user's notee title This will be the content of the first note. I will give it more text, so that people know what can be happening here. This is not a title, but the content. he he he This is a sample user note. Replace it with the actual user's notee title This will be the content of the first note. I will give it more text, so that people know what can be happening here. This is not a title, but the content. he he he This is a sample user note. Replace it with the actual user's notee title This will be the content of the first note. I will give it more text, so that people know what can be happening here. This is not a title, but the content. he he he "

  seeMoreBtn.addEventListener('click', function() {
    // Set the user note content
    userNote.textContent = sampleNote;
    // Show the popup
    popupContainer.classList.add('show');
  });

  closeBtn.addEventListener('click', function() {
    // Hide the popup when close button is clicked
    popupContainer.classList.remove('show');
  });



});

