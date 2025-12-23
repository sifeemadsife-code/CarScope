// Data Object (This is like a mini-database for your cars)
const carData = {
    "BMW 320i": { hp: "184 HP", fuel: "6.3L/100km", price: "Premium" },
    "Mercedes C200": { hp: "204 HP", fuel: "6.5L/100km", price: "Premium+" },
    "Audi A4": { hp: "190 HP", fuel: "6.1L/100km", price: "Premium" }
};

const selectors = document.querySelectorAll('.car-select');

selectors.forEach((select, index) => {
    select.addEventListener('change', (e) => {
        const carName = e.target.value;
        const displaySlot = document.getElementById(`slot-${index + 1}`);
        
        if (carData[carName]) {
            // Updating the UI dynamically
            displaySlot.innerHTML = `
                <h3 style="color: #48cae4">${carName}</h3>
                <p style="color: white; margin-top:10px">Power: ${carData[carName].hp}</p>
                <p style="color: white">Fuel: ${carData[carName].fuel}</p>
                <button class="btn-small" style="margin-top:15px; border-color:white; color:white">Full Specs</button>
            `;
            displaySlot.style.borderStyle = "solid";
            displaySlot.style.backgroundColor = "rgba(0, 119, 182, 0.2)";
        }
    });
});