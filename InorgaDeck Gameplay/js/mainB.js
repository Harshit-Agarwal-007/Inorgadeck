const cardContainer = document.getElementById('cardContainer');

const compoundNames = [
  "Water (H2O)", "Carbon Dioxide (CO2)", "Oxygen (O2)",
  "Sodium Chloride (NaCl)", "Methane (CH4)", "Ammonia (NH3)",
  "Ethanol (C2H5OH)", "Hydrochloric Acid (HCl)", "Sulfuric Acid (H2SO4)",
  "Glucose (C6H12O6)", "Acetic Acid (CH3COOH)", "Nitric Acid (HNO3)",
  "Benzene (C6H6)", "Aspirin (C9H8O4)", "Acetaminophen (C8H9NO2)",
  "Lactic Acid (C3H6O3)", "Formic Acid (HCOOH)", "Phosphoric Acid (H3PO4)",
  "Carbon Monoxide (CO)", "Nitrous Oxide (N2O)", "Sulfur Dioxide (SO2)",
  "Hydrogen Peroxide (H2O2)", "Ethylene (C2H4)", "Butane (C4H10)",
  "Propane (C3H8)", "Acetylene (C2H2)", "Toluene (C7H8)",
  "Propylene (C3H6)", "Glycerol (C3H8O3)", "Isopropanol (C3H8O)",
  "Phenol (C6H5OH)", "Methanol (CH3OH)", "Boron Trifluoride (BF3)",
  "Sodium Hydroxide (NaOH)", "Potassium Permanganate (KMnO4)",
  "Sodium Bicarbonate (NaHCO3)", "Calcium Carbonate (CaCO3)",
  "Magnesium Sulfate (MgSO4)", "Sodium Hydroxide (NaOH)",
  "Hydrogen Sulfide (H2S)", "Phenolphthalein (C20H14O4)",
  "Sodium Chlorate (NaClO3)", "Potassium Chloride (KCl)",
  "Calcium Chloride (CaCl2)", "Sodium Carbonate (Na2CO3)",
  "Potassium Nitrate (KNO3)", "Sulfur Hexafluoride (SF6)",
  "Sodium Nitrate (NaNO3)", "Nitric Acid (HNO3)", "Sodium Sulfate (Na2SO4)"
];

for (let i = 0; i < 10; i++) {
  const row = document.createElement('div');
  row.classList.add('card-row');
  
  for (let j = 0; j < 3; j++) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const index = i * 3 + j;
    card.innerHTML = `
      <img class="image" src="assets/LOGO.png" alt="Image not found"><br><br>
      <img class="bond" src="assets/bond.png" alt="Image not found"><br><br>
      <div class="compound-name">${compoundNames[index]}</div>
      <div class="add-checkbox">
        <input type="checkbox" id="remove-${index}" name="remove-${index}">
        <label for="remove-${index}">Remove</label>
      </div>
    `;
    
    row.appendChild(card);
  }
  
  cardContainer.appendChild(row);
}
