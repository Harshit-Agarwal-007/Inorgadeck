document.addEventListener('DOMContentLoaded', function() {

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
                        <div class="add-checkbox">
                            <input type="checkbox" id="add-${index}" name="add-${index}">
                            <label for="add-${index}">Add</label>
                        </div>
                    `;
                    row.appendChild(card);
                }
            }
  
            container.appendChild(row);
        }
    }
  
    const cardContainerReactants = document.getElementById('cardContainerReactants');
    const compoundNamesReactants = [
        "Sulfur Dioxide (SO2)","Oxygen (O2)","Nitrogen (N2)","Hydrogen (H2)",
        "Ammonia (NH3)","Oxygen (O2)","Ethylene (C2H4)","Water (H2O)","Nitrogen (N2)","Hydrogen (H2)",
        "Hydrogen Peroxide (H2O2)","Iron(II)","Aldehyde","Phosphonium Ylide","Carbon Monoxide (CO)","Hydrogen (H2)",
        "Alkyl Halide","Magnesium","Phenol","Carbon Dioxide"
    ];
    // Populate cards for reactants
    createCards(cardContainerReactants, compoundNamesReactants);
  
    const selectButton = document.getElementById('btn');
    selectButton.addEventListener('click', function() {
        const checkedCards = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.id.replace('add-', ''));
        localStorage.setItem('checkedReactantCards', JSON.stringify(checkedCards));
        window.location.href = 'playScreen.html';
    });
  
  });