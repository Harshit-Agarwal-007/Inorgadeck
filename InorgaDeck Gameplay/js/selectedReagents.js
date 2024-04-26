document.addEventListener('DOMContentLoaded', function() {

    const cardContainerSelected = document.getElementById('selectedCardContainer');
  
    const checkedCards = JSON.parse(localStorage.getItem('checkedReagentCards'));

  
    const compoundNamesReagents = [
        " Vanadium(V) Oxide", "Iron", "Platinum-Rhodium Alloy",
        "alladium(II) Chloride", "Iron (Potassium Hydroxide)", "Iron(II) Salt",
        "Base", "Iron-based Catalyst", "Iodine", "Sodium Hydroxide"
    ];
  
    const selectedCards = [];
    checkedCards.forEach((card, index) => {
        console.log(`Index ${index}: ${card}`);
        selectedCards[index]=compoundNamesReagents[card];
      });
  
  
  
    // Function to create card elements for given compound names
    function createCards(container, compoundNames) {
        for (let i = 0; i < 4; i++) {
            const row = document.createElement('div');
            row.classList.add('card-row');
  
            for (let j = 0; j < 3; j++) {
                const card = document.createElement('div');
                card.classList.add('card');
  
                const index = i * 3 + j;
                if (index < compoundNames.length) { // Check array bounds
                    card.innerHTML = `
                        <img class="image" src="assets/LOGO.png" alt="Image not found"><br><br>
                        <img class="bond" src="assets/bond.png" alt="Image not found"><br><br>
                        <div class="compound-name">${compoundNames[index]}</div>
                     
                    `;
                    row.appendChild(card);
                }
            }
  
            container.appendChild(row);
        }
    }

    // Populate cards for selected reactants
    createCards(cardContainerSelected, selectedCards);
  
});