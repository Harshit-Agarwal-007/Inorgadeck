let timeLeft = 19 * 60; // 19 minutes

function startOrResumeTimer(initialTime) {
    var countdownElement = document.getElementById('countdown');
    var endTime = Date.now() + (initialTime * 1000); // Calculate end time in milliseconds

    function updateTimer() {
        var remainingTime = endTime - Date.now();
        if (remainingTime <= 0) {
            // Timer has ended, show the popup
            clearInterval(timerInterval); // Stop the timer interval
            countdownElement.textContent = "00:00";
            showPopup();
            return;
        }

        var minutes = Math.floor(remainingTime / 60000);
        var seconds = Math.floor((remainingTime % 60000) / 1000);

        // Adjust the format to display as MM:SS
        var formattedMinutes = minutes.toString().padStart(2, '0');
        var formattedSeconds = seconds.toString().padStart(2, '0');

        var formattedTime = `${formattedMinutes}:${formattedSeconds}`;
        countdownElement.textContent = formattedTime;

    } 
    function showPopup() {
        const popup = document.getElementById('popup');
        popup.style.display = 'block';
    }
    

    // Update timer immediately and then every second
    updateTimer();
    var timerInterval = setInterval(updateTimer, 1000);

}

// Example: Start or resume the timer with 1200 seconds (20 minutes) when the page loads
window.onload = function() {
    startOrResumeTimer(12);
};