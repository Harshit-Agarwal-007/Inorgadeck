document.addEventListener('DOMContentLoaded', function() {
    // function showPopup() {
    //     const popup = document.getElementById('popup');
    //     popup.style.display = 'block';
    // }
    const viewReactionLink = document.getElementById('ViewReaction');
    
    function updateReactionCount() {
        const learnedReactions = JSON.parse(localStorage.getItem('learnedReactions')) || [];
        const reactionCount = learnedReactions.length;
        const countdownElement = document.getElementById('countdown');
        countdownElement.textContent = `${reactionCount}/10`; // Assuming the user can learn up to 10 reactions
    }

    // Call the function to update the reaction count when the page loads
    updateReactionCount();



    viewReactionLink.addEventListener('click', function() {
        const selectedReactants = JSON.parse(localStorage.getItem('checkedReactantCards')) || [];
        const selectedReagents = JSON.parse(localStorage.getItem('checkedReagentCards')) || [];
        const selectedProducts = JSON.parse(localStorage.getItem('checkedProductCards')) || [];

        if (selectedReactants.length === 0 || selectedReagents.length === 0 || selectedProducts.length === 0) {
            alert("Please select at least one reactant, reagent, and product before viewing the reaction.");
            return;
        }

        const reactionString = generateReactionString(selectedReactants, selectedReagents, selectedProducts);

        const learnedReactions = JSON.parse(localStorage.getItem('learnedReactions')) || [];

        if (learnedReactions.includes(reactionString)) {
            alert(reactionString + "\n" + "You have already found this Reaction");
        } else {
            addReactionToLocalStorage(reactionString);
        }
        const keys = Object.keys(localStorage);

        // Iterate over the keys and clear items not related to learnedReaction
        keys.forEach(key => {
            if (key !== 'learnedReactions') {
                localStorage.removeItem(key);
            }
        });
    });

  

    function generateReactionString(reactants, reagents, products) {
        const compoundNamesReactants = [
            "Sulfur Dioxide (SO2)","Oxygen (O2)","Nitrogen (N2)","Hydrogen (H2)",
            "Ammonia (NH3)","Oxygen (O2)","Ethylene (C2H4)","Water (H2O)","Nitrogen (N2)","Hydrogen (H2)",
            "Hydrogen Peroxide (H2O2)","Iron(II)","Aldehyde","Phosphonium Ylide","Carbon Monoxide (CO)","Hydrogen (H2)",
            "Alkyl Halide","Magnesium","Phenol","Carbon Dioxide"
        ];

        const compoundNamesReagents = [
            " Vanadium(V) Oxide", "Iron", "Platinum-Rhodium Alloy",
            "alladium(II) Chloride", "Iron (Potassium Hydroxide)", "Iron(II) Salt",
            "Base", "Iron-based Catalyst", "Iodine", "Sodium Hydroxide"
        ];

        const compoundNamesProducts = [
            "Sulfur Trioxide (SO3)", "Ammonia (NH3)", "Nitric Oxide (NO)",
            "Water (H2O)", "Acetaldehyde (CH3CHO)", "Ammonia (NH3)",
            "Hydroxyl Radicals (•OH)", "Iron(III)", "Alkene","Hydrocarbons",
            "Grignard Reagent","Salicylic Acid"
        ];

        const reactantsString = reactants.map(index => compoundNamesReactants[index]).join(' + ');
        const reagentsString = reagents.map(index => compoundNamesReagents[index]).join(' + ');
        const productsString = products.map(index => compoundNamesProducts[index]).join(' + ');

        return `${reactantsString} + ${reagentsString} -> ${productsString}`;
    }

    function addReactionToLocalStorage(reactionString) {
        const validReactions = [
            "Sulfur Dioxide (SO2) + Oxygen (O2) + Vanadium(V) Oxide -> Sulfur Trioxide (SO3)",
            "Nitrogen (N2) + Hydrogen (H2) + Iron -> Ammonia (NH3)",
            "Ammonia (NH3) + Oxygen (O2) + Platinum-Rhodium Alloy -> Nitric Oxide (NO) + Water (H2O)",
            "Ethylene (C2H4) + Water (H2O) + Palladium(II) Chloride -> Acetaldehyde (CH3CHO)",
            "Nitrogen (N2) + Hydrogen (H2) + Iron (Potassium Hydroxide) -> Ammonia (NH3)",
            "Hydrogen Peroxide (H2O2) + Iron(II) + Iron(II) Salt -> Hydroxyl Radicals (•OH) + Iron(III)",
            "Aldehyde + Phosphonium Ylide + Base -> Alkene",
            "Carbon Monoxide (CO) + Hydrogen (H2) + Iron-based Catalyst -> Hydrocarbons",
            "Alkyl Halide + Magnesium + Iodine -> Grignard Reagent",
            "Phenol + Carbon Dioxide + Sodium Hydroxide -> Salicylic Acid",
        ];

        const learnedReactions = JSON.parse(localStorage.getItem('learnedReactions')) || [];
       
        if (validReactions.includes(reactionString)) {
            alert(reactionString + "\n" + "You have found a valid Reaction");
            window.location.reload();
            learnedReactions.push(reactionString);
            localStorage.setItem('learnedReactions', JSON.stringify(learnedReactions));
        } else {
            alert(reactionString + "\n" + "You have not found a valid Reaction");
        }
    }
});