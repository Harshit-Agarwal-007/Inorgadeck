document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the checkbox and the start game link
    const checkbox = document.getElementById("read");
    const startGameLink = document.querySelector(".startButton");
  
    // Disable the start game link initially
    startGameLink.style.pointerEvents = "none";
    startGameLink.style.opacity = 0.5;
  
    // Add event listener to the checkbox
    checkbox.addEventListener("change", function() {
      if (checkbox.checked) {
        // Checkbox is checked, enable the start game link
        startGameLink.style.pointerEvents = "auto";
        startGameLink.style.opacity = 1;
        localStorage.clear();
      } else {
        // Checkbox is unchecked, disable the start game link
        startGameLink.style.pointerEvents = "none";
        startGameLink.style.opacity = 0.5;
        // Show alert message
        alert("Please read all the instructions before starting the game.");
      }
    });
  });
  