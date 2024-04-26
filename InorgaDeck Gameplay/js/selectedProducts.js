document.addEventListener('DOMContentLoaded', function() {

    const cardContainerSelected = document.getElementById('selectedCardContainer');
  
    const checkedCards = JSON.parse(localStorage.getItem('checkedProductCards'));

  
    const compoundNamesProducts = [
        "Sulfur Trioxide (SO3)", "Ammonia (NH3)", "Nitric Oxide (NO)",
        "Water (H2O)", "Acetaldehyde (CH3CHO)", "Ammonia (NH3)",
        "Hydroxyl Radicals (•OH)", "Iron(III)", "Alkene","Hydrocarbons",
        "Grignard Reagent","Salicylic Acid"
    ];
  
    const selectedCards = [];
    checkedCards.forEach((card, index) => {
        console.log(`Index ${index}: ${card}`);
        selectedCards[index]=compoundNamesProducts[card];
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