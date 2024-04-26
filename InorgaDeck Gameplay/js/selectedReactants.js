document.addEventListener('DOMContentLoaded', function() {

    const cardContainerSelected = document.getElementById('selectedCardContainer');
  
    const checkedCards = JSON.parse(localStorage.getItem('checkedReactantCards'));

  
    const compoundNamesReactants = [
        "Sulfur Dioxide (SO2)","Oxygen (O2)","Nitrogen (N2)","Hydrogen (H2)",
            "Ammonia (NH3)","Oxygen (O2)","Ethylene (C2H4)","Water (H2O)","Nitrogen (N2)","Hydrogen (H2)",
            "Hydrogen Peroxide (H2O2)","Iron(II)","Aldehyde","Phosphonium Ylide","Carbon Monoxide (CO)","Hydrogen (H2)",
            "Alkyl Halide","Magnesium","Phenol","Carbon Dioxide"
    ];
  
    const selectedCards = [];
    checkedCards.forEach((card, index) => {
        console.log(`Index ${index}: ${card}`);
        selectedCards[index]=compoundNamesReactants[card];
      });
  
  
  
    // Function to create card elements for given compound names
    function createCards(container, compoundNames) {
        for (let i = 0; i < 7; i++) {
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