
document.addEventListener('DOMContentLoaded', function() {
    const learnedReactions = JSON.parse(localStorage.getItem('learnedReactions')) || [];
  
    const learnedList = document.getElementById('learned');
  
    learnedReactions.forEach((reaction, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = ` ${reaction}`;
      learnedList.appendChild(listItem);
    });
  });
  