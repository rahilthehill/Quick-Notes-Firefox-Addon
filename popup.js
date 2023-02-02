document.getElementById("save-btn").addEventListener("click", function() {
    let notes = document.getElementById("notes").value;
    localStorage.setItem("notes", notes);
  });
  
  window.onload = function() {
    let savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      document.getElementById("notes").value = savedNotes;
    }
  };
  