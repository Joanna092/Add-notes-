document.addEventListener("DOMContentLoaded", function () {
  // Code placed here will run when the DOM content has loaded.
  var noteList = document.getElementById("note-list");
  var noteTitle = document.getElementById("note-title");
  var contentInput = document.getElementById("content-input");
  var addButton = document.getElementById("add-button");
  var bodyOverlay = document.createElement("div"); // Create overlay element
  bodyOverlay.classList.add("overlay"); // Add overlay class to the element
  document.body.appendChild(bodyOverlay); // Append overlay to body
  var photoInput = document.getElementById("photo-input");
 

  var addNote = function () {
    if (!noteTitle.value.trim() || !contentInput.value.trim()) {
      alert("Please enter both title and content.");
      return; // Exit the function early if validation fails
    }

    if (photoInput.files && photoInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        userPhoto.src = e.target.result;
      };
      reader.readAsDataURL(photoInput.files[0]);
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

    //Create wrapper
    var stickyWrapper = document.createElement("div");
    stickyWrapper.setAttribute("class", "sticky-content-wrapper");


    
    //create a div for the content of the note
    var stickyContent = document.createElement("div");

    // Give it a class of sticky-content.
    stickyContent.setAttribute("class", "sticky-content");
    // Make the content non-editable.
    stickyContent.setAttribute("contenteditable", "false");
    // Catch content from the input field
    stickyContent.innerText = contentInput.value;

    //Create a see more button
    var seeMoreBtn = document.createElement("button");
    seeMoreBtn.setAttribute("id", "seeMoreBtn");
    seeMoreBtn.innerText = "See more";

    //Add noteText to the div
    newStickyNote.appendChild(stickyHeader);
    newStickyNote.appendChild(stickyWrapper);
    stickyWrapper.appendChild(stickyTitle);
    stickyWrapper.appendChild(stickyContent);
    newStickyNote.appendChild(seeMoreBtn);

    // Append noteList to the note-list div
    noteList.appendChild(newStickyNote);

     // Event listener for "See more" button inside the addNote function
     seeMoreBtn.addEventListener("click", function () {

      if (photoInput.files && photoInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          userPhoto.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
      }


      const userNote = document.getElementById('userNote');
      const userTitleNote = document.getElementById('userTitleNote');
      // Set the user note content
      userTitleNote.innerHTML= stickyTitle.innerHTML;
      userNote.innerHTML= stickyContent.innerHTML; // Access stickyContent here
      // Show the popup
       popupContainer.style.display = "block";
       bodyOverlay.style.display = "block"; // Show overlay
    });

  };

  addButton.addEventListener("click", function () {
    if (noteTitle.value.trim() && contentInput.value.trim()) {
      addNote();
      noteTitle.value = "";
      contentInput.value = "";
      photoInput.value = []
    }
  });

  closeBtn.addEventListener('click', function() {
    popupContainer.style.display = "none";
    bodyOverlay.style.display = "none"; // Show overlay
  });
});