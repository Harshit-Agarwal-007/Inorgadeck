document.addEventListener('DOMContentLoaded', function() {


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
  

  
    const cardContainerReagents = document.getElementById('cardContainerReagents');
    const compoundNamesReagents = [
        " Vanadium(V) Oxide", "Iron", "Platinum-Rhodium Alloy",
        "alladium(II) Chloride", "Iron (Potassium Hydroxide)", "Iron(II) Salt",
        "Base", "Iron-based Catalyst", "Iodine", "Sodium Hydroxide"
    ];
  
    // Populate cards for reagents
    createCards(cardContainerReagents, compoundNamesReagents);

    const selectButton = document.getElementById('btn');
    selectButton.addEventListener('click', function() {
        const checkedCards = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.id.replace('add-', ''));
        localStorage.setItem('checkedReagentCards', JSON.stringify(checkedCards));
        window.location.href = 'playScreen.html';
    });

  
  
  });
  